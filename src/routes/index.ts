import { Router } from 'express';
import { authRouter } from './auth';
import path from 'path';
import { redirectNonAuth } from '../middleware/redirectNonAuth';

const routes = Router();

routes.get('/auth', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/auth.html'));
});

routes.get('/', redirectNonAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

routes.use('/api/auth', authRouter);

export { routes };
