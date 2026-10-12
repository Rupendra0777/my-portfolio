import mongoose from "mongoose";
import dotenv from "dotenv";
import 'dotenv/config';
dotenv.config();
const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    // console.log("application is connected to database successfully");
};

export default connectDB;
