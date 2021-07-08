import cors from 'cors';
import express from 'express';
import { router } from './routes/router';
import { errorHandler } from './services/errorHandler';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);
app.use(errorHandler);

export { app };
