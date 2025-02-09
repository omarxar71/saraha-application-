import User from '../../DB/models/user.model.js';
import CryptoJS from 'crypto-js';
import  jwt  from 'jsonwebtoken';
import path from "path";
import { fileURLToPath } from "url";
import {emailEvent} from "../../utils/email.emitter.js"
import {  compareHash, hashing } from '../../utils/hashing/hash.js';


// ✅ Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const register = async(req ,res , next)=>{

       

        const {password , email , userName , phoneNumber , confirmPassword}= req.body
        emailEvent.emit("sendEmail" , email)
        const hash =hashing({password:plainText})

        const cryptojs = CryptoJS.AES.encrypt(phoneNumber , process.env.SECRET_KEY).toString()
        const createUser = await User.create({password:hash , email , userName , phoneNumber:cryptojs , confirmPassword})
        
        return res.status(200).json({message: createUser})
    
       
}
export const login =async (req , res)=>{
    
        const {password , email}=req.body 
        const user = await User.findOne({email})
        
       
        if(!user)
            return res.status(400).json({message:"no user found"})
        if(user.isActivated == false) return res.status(477).json({message : "you have to check your email"})
        const token = jwt.sign({email : user.email ,id: user._id}, process.env.TOKEN_KEY)
        // const hash = compareHash(password:plainText  , user.password:hashed)
        const hash = compareHash({plainText:password , hashed:user.password}) 
        if(!hash)
            return next(new Error("invalid password" , {cause:400}))
        return res.status(200).json({message:"user logged in successfully" , results : {user , token}})
}
export const activateAccount =async (req ,res,next)=>{
    
        const {token} =req.params;
        const {email} = jwt.verify(token , process.env.TOKEN_KEY)
        const user = await User.findOne({email})
        if(!user) return next(new Error("user not found" , {cause : 400}))
        user.isActivated = true
        user.save()
            res.sendFile(path.join(__dirname, 'html.html'));
        // return res.status(200).json({message:"email activated successfully"})
 
}

