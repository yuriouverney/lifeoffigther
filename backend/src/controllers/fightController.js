import { Fight, User } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
import { io } from '../server.js';

function calcWinner(challenger,opponent){
  const cScore = challenger.strength + challenger.agility + challenger.luck*Math.random();
  const oScore = opponent.strength + opponent.agility + opponent.luck*Math.random();
  return cScore>=oScore ? challenger : opponent;
}

export const startFight = asyncHandler(async(req,res)=>{
  const { opponentId } = req.body;
  const challenger = await User.findByPk(req.user.id);
  const opponent   = await User.findByPk(opponentId);
  if(!opponent) return res.status(404).json({error:'Opponent not found'});
  const winner = calcWinner(challenger,opponent);
  const fight = await Fight.create({ challengerId:challenger.id, opponentId:opponent.id, winnerId:winner.id, log:{} });
  io.to(opponent.id.toString()).emit('fightInvitation', { from: challenger.username });
  res.json({ fightId:fight.id, winner:winner.id });
});
