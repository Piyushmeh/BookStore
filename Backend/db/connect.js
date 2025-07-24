import mongoose from "mongoose";
const connectDB=async ()=>{
    try{
await mongoose.connect(process.env.MONGO_URI)
console.log("connected to mongo db successfully")
    }
    catch(e){
console.log("db connection error ",e)
    }
}
export default connectDB;


