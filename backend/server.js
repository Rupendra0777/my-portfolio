import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";

const app = express();

const frontendOrigin = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({ origin: frontendOrigin }));

app.use(express.json());

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 8000;

try {
    await connectDB()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
}