import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () =>{
    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB Connection Succesful")

    }catch(error){
     console.log("MONGO DB Connection Failed ",error);
    process.exit(1)
    }
}
export default connectDB