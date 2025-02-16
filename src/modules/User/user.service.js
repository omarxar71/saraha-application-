import User from '../../DB/models/user.model.js';
import  jwt  from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import { compareHash, hashing } from '../../utils/hashing/hash.js';


export const profile = async (req , res)=>{
    try {
    const {user}=req;
        const phoneNumber = CryptoJS.AES.decrypt(user.phoneNumber ,process.env.SECRET_KEY ).toString(CryptoJS.enc.Utf8)
       
        return res.status(200).json({message : {...user , phoneNumber}})

    } catch (error) {
        return res.status(400).json({message : error.message})
    }
}

export const updateProfile= async(req ,res , next)=>{
    const user = await User.findOneAndUpdate(req.user._id , req.body , {new: true , runValidators : true})
    return res.status(200).json({message : user})

}
export const updatePassword= async(req ,res , next)=>{
    const {oldPassword , Password}=req.body
    console.log(oldPassword ,Password)
    const compare = compareHash({plainText:oldPassword , hashed:req.user.password})
    console.log(req.user.password)
    if(!compare) return next(new Error("wrong old password"))
    const hash = hashing({plainText:Password })
    const user = await User.findOneAndUpdate(req.user._id ,{password : hash ,UpdateTimePassword:Date.now() }, {new: true , runValidators : true})
    return res.status(200).json({message : "password updated"})

}
export const freezeProfile= async(req ,res , next)=>{

    const user = await User.findOneAndUpdate(req.user._id ,{isDeleted:true ,UpdateTimePassword:Date.now() }, {new: true , runValidators : true})
    return res.status(200).json({message : "account freezed"})

}
export const shareProfile =async(req ,res ,next)=>{
    const {userId}= req.params 
    const user = await User.find({_id:userId , isDeleted:false})
    if(!user) return next(new Error("user not found"))
}