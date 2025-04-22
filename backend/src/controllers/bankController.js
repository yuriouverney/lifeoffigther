import { BankAccount } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
export const balance = asyncHandler(async(req,res)=>{
  const acc = await BankAccount.findOne({ where:{ userId:req.user.id }});
  res.json(acc);
});
export const deposit = asyncHandler(async(req,res)=>{
  const { amount } = req.body;
  const acc = await BankAccount.findOne({ where:{ userId:req.user.id }});
  await acc.increment({ balance: amount });
  res.json({ balance: acc.balance+amount });
});
export const withdraw = asyncHandler(async(req,res)=>{
  const { amount } = req.body;
  const acc = await BankAccount.findOne({ where:{ userId:req.user.id }});
  if(acc.balance<amount) return res.status(400).json({error:'Insufficient'});
  await acc.decrement({ balance:amount });
  res.json({ balance: acc.balance-amount });
});
