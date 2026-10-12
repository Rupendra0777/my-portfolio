import express from "express";
import connectDB from "./src/config/db.js";

let app = express();

app.listen(8000, () => {
    console.log("Server is running on port 8000");
    connectDB();
    console.log("Database connection successfully");
});
app.use(express.json());