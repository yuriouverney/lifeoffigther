import { User } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
export const global = asyncHandler(async(req,res)=>{
  const ranking = await User.findAll({ order:[['experience','DESC']], limit:50 });
  res.json(ranking);
});
