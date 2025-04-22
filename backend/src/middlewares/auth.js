import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export default function(req,res,next){
  const auth = req.headers.authorization || '';
  const token = auth.split(' ')[1];
  if(!token) return res.status(401).json({error:'Missing token'});
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }catch(err){
    res.status(401).json({error:'Invalid token'});
  }
}
