import { Router } from "express";
import Contact from "../models/contactSchemas.js";
const router = Router();

router.post("/", async (req, res) => {
    const { name, email, message } = req.body;

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof message !== "string" ||
        !name.trim() ||
        !email.trim() ||
        !message.trim()
    ) {
        return res.status(400).json({
            message: "Name, email, and message are required.",
        });
    }

    const cleanedName = name.trim();
    const cleanedEmail = email.trim().toLowerCase();
    const cleanedMessage = message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (cleanedName.length > 80 || cleanedEmail.length > 254 || cleanedMessage.length > 2000) {
        return res.status(400).json({
            message: "One or more fields exceed the allowed length.",
        });
    }

    if (!emailPattern.test(cleanedEmail)) {
        return res.status(400).json({ message: "Please enter a valid email address." });
    }

    try {
        const contact = await Contact.create({
            name: cleanedName,
            email: cleanedEmail,
            message: cleanedMessage,
        });
        return res.status(201).json({
            message: "Message received.",
            id: contact._id,
        });
    } catch (error) {
        console.error("Failed to save contact message:", error);
        return res.status(500).json({
            message: "Could not send your message. Please try again later.",
        });
    }
});

export default router;