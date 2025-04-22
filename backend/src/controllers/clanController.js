import { Clan, ClanMember } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
export const createClan = asyncHandler(async(req,res)=>{
  const { name } = req.body;
  const clan = await Clan.create({ name, ownerId:req.user.id });
  await ClanMember.create({ clanId:clan.id, userId:req.user.id, role:'leader' });
  res.json(clan);
});
