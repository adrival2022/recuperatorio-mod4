import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import { AppRoutes } from './routes/app-router';

const app = express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/api", AppRoutes.routes);

export default app;