import { model, Schema, Types } from "mongoose";

//schema 
const messageSchema=new Schema ({
    content: {type: String, required : true},
    sender : {type : Types.ObjectId  , ref : "User" , required : true},
    receiver : {type: Types.ObjectId ,ref : "User" , required : true},
})



//model 

const Message = model ("Message" ,messageSchema )
export default Message