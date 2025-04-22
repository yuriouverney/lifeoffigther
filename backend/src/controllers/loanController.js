import { Loan } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
export const take = asyncHandler(async(req,res)=>{
  const { amount } = req.body;
  const loan = await Loan.create({ userId:req.user.id, amount, interest:0.2 });
  res.json(loan);
});
