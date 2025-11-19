require('dotenv').config()
import express from "express";
import cors from "cors";
const app = express();

app.use(cors({
    origin: ["https://brainly-fullstack.vercel.app", "http://localhost:5173"], // Allow frontend origins
    methods: "GET,POST,PUT,DELETE", 
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true // Allow cookies/auth headers
}));

app.use(express.json());

// Ensure preflight (OPTIONS) requests get a proper response
app.options("*", cors());

import rootRouter from "./routes/index";

app.use("/api/v1", rootRouter);


app.listen(process.env.PORT!);