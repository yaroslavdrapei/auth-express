import { Router } from 'express';
import { loginController } from '../controllers/auth/login';
import { signupController } from '../controllers/auth/signup';
import { validateAuthBody } from '../middleware/validateAuthBody';

const authRouter = Router();

authRouter.post('/login', validateAuthBody, loginController);
authRouter.post('/signup', validateAuthBody, signupController);

export { authRouter };
