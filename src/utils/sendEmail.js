import nodemailer from "nodemailer"
const sendEmail = async({to  , subject ,html })=>{
    //sender
    const transport =nodemailer.createTransport({
        host:"smtp.gmail.com" , 
        port:465, 
        secure:true,
        auth:{
            user:process.env.SENDER,
            pass:process.env.PASS,
        }
    })




    //receiver
    const info = await transport.sendMail({
        from:`Saraha Application <${process.env.SENDER }>`,
        to,
        subject , 
        html
    })
    return info.rejected == 0 ? true : false
}



export default sendEmail
