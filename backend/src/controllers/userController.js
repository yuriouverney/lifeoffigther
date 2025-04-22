import { User, Skill } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';

export const profile = asyncHandler(async(req,res)=>{
  const user = await User.findByPk(req.user.id,{ include:[ Skill ]});
  res.json(user);
});
