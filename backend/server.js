import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";

const app = express();

const frontendOrigins = (
    process.env.FRONTEND_URLS ||
    process.env.FRONTEND_URL ||
    "http://localhost:5173"
)
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(
    cors({
        origin(origin, callback) {
            if (!origin || frontendOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error(`Origin ${origin} is not allowed by CORS.`));
        },
    })
);

app.use(express.json());

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

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