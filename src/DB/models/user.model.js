
import { model, Schema } from "mongoose";
const genders = {
    mala: "male", 
    female : "female"
}
export const roles = {
    admin : "admin" , 
    user: "user",
}

//schema 
const userSchema = new Schema({
    email: {type: String , require: [true , "Email Already exists"] , unique: true , match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    password : {type:String , require: true },
    userName : {type:String , require: true , unique:true},
    phoneNumber: {type:String , require: true  , unique: true},
    gender:{type:String ,Enum: Object.values(genders)}, 
    isActivated : {type:Boolean , default:false}, 
    role : {type:String ,enum : Object.values(roles) , default: roles.user}, 
    UpdateTimePassword :Date , 
    isDeleted:{type:Boolean , default:false},
},{timestamps:true})


//model
const User = model("User" , userSchema);



export default User;