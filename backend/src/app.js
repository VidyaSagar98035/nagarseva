import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// Security middleware
app.use(helmet());

// Frontend connection
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan("dev"));

// Static uploads
app.use("/uploads", express.static("uploads"));

// Root API
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to NagarSeva Backend API",
        project: "NagarSeva",
        status: "Running"
    });
});

// Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "NagarSeva API is healthy"
    });
});

// Export app
export default app;
