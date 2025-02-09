import User from "../DB/models/user.model.js";
import  jwt  from 'jsonwebtoken';
export const isAuthenticated = async (req ,res , next)=>{
  try {
      //who are you 
      const {auth} = req.headers
      const token = auth.split(" ")[1]
      const payload =jwt.verify(token , process.env.TOKEN_KEY)
      
      //find the user by the payload info
      const user = await User.findById(payload.id).select("-password").lean()
      if(!user) return res.status(404).json({message : "user not found"})
      req.user=user;
      return next();
  } catch (error) {
    if(error) return res.status(500).json({message : error.message , message : "error from auth middleware "})
  }
} 