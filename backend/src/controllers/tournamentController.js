import { Tournament, User } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
export const current = asyncHandler(async(req,res)=>{
  const tour = await Tournament.findOne({ order:[['id','DESC']]});
  res.json(tour);
});
