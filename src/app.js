import express from "express";
import cors from "cors";
import category from "./routes/category";
import auth from './routes/auth';
import morgan from "morgan";

import config from "./config";


const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", category);
app.use("/api/auth", auth);

export default app;
