import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import LoginRoute from './routes/login';

dotenv.config();

const app = express();

app.use('/login', LoginRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`)
});