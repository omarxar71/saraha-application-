import joi from "joi";
import { generalFields } from "../../middleware/validation.midlleware.js";
import { Types } from 'mongoose';

export const updateProfile = joi.object({
    userName : generalFields.userName,
    gender:generalFields.gender,
}).required()

export const shareProfile = joi.object({
    id:joi.string().custom((value , helper)=>{
        if(Types.ObjectId.isValid(value))
            return true
        return helper.message("invalid ID")
    })
}).required()
export const updatePassword= joi.object({
    oldPassword : generalFields.password,
    Password:generalFields.password.not(joi.ref("oldPassword")),
    confirmationPassword : generalFields.password.valid(joi.ref("Password")),
}).required()