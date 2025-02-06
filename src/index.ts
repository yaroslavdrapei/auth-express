import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { routes } from './routes';
import cookieParser from 'cookie-parser';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static('public', { index: false }));
app.use(cookieParser(process.env.SIGN_KEY));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listen on ${PORT}`);
});
