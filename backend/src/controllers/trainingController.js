import { TrainingSession, User } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
export const start = asyncHandler(async(req,res)=>{
  const { attribute } = req.body;
  const cost=10;
  const user = await User.findByPk(req.user.id);
  if(user.energy<cost) return res.status(400).json({error:'No energy'});
  await TrainingSession.create({ userId:user.id, attribute, energyCost:cost });
  await user.decrement({ energy: cost });
  await user.increment({ [attribute]:1 });
  res.json({ energy:user.energy-cost });
});
