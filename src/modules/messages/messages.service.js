import Message from "../../DB/models/message.model.js"
import User from "../../DB/models/user.model.js"

export const sendMessage = async(req ,res ,next) =>{
    const{receiver , content} = req.body
    const user = await User.findById(receiver)
    
    if(!user) return next(new Error("user not found" , {cause : 500}))
    const createMessage = await Message.create({receiver , content , sender: req.user._id})
    return res.status(200).json({success : true , createMessage})
}