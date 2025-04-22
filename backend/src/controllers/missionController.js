import { Mission, UserMission, User } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';

export const list = asyncHandler(async(req,res)=>{
  const missions = await Mission.findAll({ where:{ active:true }});
  res.json(missions);
});
export const accept = asyncHandler(async(req,res)=>{
  const { missionId } = req.body;
  await UserMission.create({ userId:req.user.id, missionId, status:'active' });
  res.json({ success:true });
});
export const complete = asyncHandler(async(req,res)=>{
  const { missionId } = req.body;
  const um = await UserMission.findOne({ where:{ userId:req.user.id, missionId }});
  if(!um || um.status==='completed') return res.status(400).json({error:'Not active'});
  const mission = await Mission.findByPk(missionId);
  const user = await User.findByPk(req.user.id);
  await user.increment({ experience: mission.rewardXp, money: mission.rewardMoney });
  await um.update({ status:'completed'});
  res.json({ success:true });
});
