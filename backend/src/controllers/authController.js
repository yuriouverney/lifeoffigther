import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, BankAccount } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
import dotenv from 'dotenv';
dotenv.config();

export const register = asyncHandler(async(req,res)=>{
  const { username,email,password,fightingStyle } = req.body;
  const hash = await bcrypt.hash(password,10);
  const user = await User.create({ username,email,password:hash,fightingStyle });
  await BankAccount.create({ userId:user.id });
  res.status(201).json({ id:user.id });
});

export const login = asyncHandler(async(req,res)=>{
  const { email,password } = req.body;
  const user = await User.findOne({ where:{ email }});
  if(!user) return res.status(401).json({error:'Invalid'});
  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.status(401).json({error:'Invalid'});
  const token = jwt.sign({ id:user.id }, process.env.JWT_SECRET,{ expiresIn:'1d'});
  res.json({ token });
});
