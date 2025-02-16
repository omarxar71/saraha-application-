import joi from "joi";
import mongoose from "mongoose";

export const sendMessage =joi.object(
    {
        content: joi.string().required() , 
        receiver : joi.custom((value , helper)=>{
          if(  mongoose.Types.ObjectId.isValid(value)) return true 
          return helper.message("invalid object id")

        })
    }
).required()

