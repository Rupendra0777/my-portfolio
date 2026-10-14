import mongoose from "mongoose";

const connectDB = async () => {
    if (!process.env.MONGO_URL) {
        throw new Error("MONGO_URL is missing from the backend environment.");
    }

    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB.");
};

export default connectDB;
