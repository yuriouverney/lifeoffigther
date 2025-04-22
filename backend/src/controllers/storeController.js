import { Item, Inventory, User } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
export const list = asyncHandler(async(req,res)=>{
  const items = await Item.findAll();
  res.json(items);
});
export const buy = asyncHandler(async(req,res)=>{
  const { itemId } = req.body;
  const item = await Item.findByPk(itemId);
  if(!item || item.stock<=0) return res.status(404).json({error:'Item not available'});
  const user = await User.findByPk(req.user.id);
  if(user.money < item.price) return res.status(400).json({error:'No money'});
  await user.decrement({ money: item.price });
  await item.decrement({ stock:1 });
  await Inventory.create({ userId:user.id, itemId:item.id });
  res.json({ success:true });
});
