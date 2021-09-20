import express from "express";
import cors from "cors";
import morgan from "morgan";

import auth from './routes/auth';
import category from "./routes/category";
import service from './routes/service';
import holiday from './routes/holiday';
import presentatitonDay from './routes/presentatitonDay';
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
app.use("/api/auth", auth);
app.use("/api", category);
app.use("/api", service);
app.use("/api", holiday);
app.use("/api", presentatitonDay);

export default app;
