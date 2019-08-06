import express, { json } from 'express';
import dotenv from "dotenv";
import morgan from 'morgan';
import IndexRoutes from "./routes/index.routes";
import TaskRoutes from "./routes/task.routes";


// Environment variables
dotenv.config()

// Up server
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(json());
app.use(morgan('dev'));

// Routes
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);

export default app;
