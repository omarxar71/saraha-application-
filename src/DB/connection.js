import mongoose from "mongoose";
const connectDb=async()=>{
    await mongoose.connect(process.env.CONNECTION_URI)
    .then(()=>console.log("connected to db suc"))
    .catch((err)=>console.log("failed to connect to db"+err));
}
export default connectDb;