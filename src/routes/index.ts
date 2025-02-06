import { Router } from 'express';
import { authRouter } from './auth';
import path from 'path';

const routes = Router();

routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

routes.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/welcome.html'));
});

routes.use('/auth', authRouter);

export { routes };
