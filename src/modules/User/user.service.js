import User from '../../DB/models/user.model.js';
import  jwt  from 'jsonwebtoken';
import CryptoJS from 'crypto-js';


export const profile = async (req , res)=>{
    try {
    const {user}=req;
        const phoneNumber = CryptoJS.AES.decrypt(user.phoneNumber ,process.env.SECRET_KEY ).toString(CryptoJS.enc.Utf8)
       
        return res.status(200).json({message : {...user , phoneNumber}})

    } catch (error) {
        return res.status(400).json({message : error.message})
    }
}