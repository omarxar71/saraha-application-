import connectDb from "./DB/connection.js"
import userRouter from "./modules/User/user.controller.js"
import authRouter from "./modules/auth/auth.controller.js"
import messageRouter from "./modules/messages/messages.controller.js"
const bootsrap =async(app , express)=>{
    // connection to db
    await connectDb()

    // parser
    app.use(express.json())
    app.use("/user" , userRouter)
    app.use("/auth" , authRouter)
    app.use("/messages" , messageRouter)
    //not found page
    app.all("*" , (req ,res ,next)=>{
        return res.status(404).json({message : "not found page"})
    })
    //global error

    app.use((error , req , res , next)=>{
        const status = error.cause || 400
        return res.status(status).json({suc:false , message : error.message})
    }) 
}

export default bootsrap;