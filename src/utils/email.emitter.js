import { EventEmitter } from "events"
import {verifyEmail} from "../utils/signupHtml.js";
import sendEmail from "../utils/sendEmail.js"
import  jwt  from 'jsonwebtoken';

export const emailEvent = new EventEmitter()
emailEvent.on("sendEmail" , async (email)=>{
    const token = jwt.sign({email} , process.env.TOKEN_KEY)
    const link = `http://localhost:3000/auth/activateAccount/${token}`
    const isSent = await sendEmail({
        to:email ,
        subject:"Saraha Application" ,
        html:verifyEmail(link)})
})