import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";


const connectDB=async ()=>{
    try{
        const connectionInstances=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MONGODB CONNECTED !! DB host:${connectionInstances.connection.host}`);

    }catch(e){
      console.log("mongodb connection failed", e);
    }
}
export default connectDB;
