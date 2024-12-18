import { Router } from 'express';
import { loginController } from '../controllers/auth/login';
import { signupController } from '../controllers/auth/signup';

const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.post('/signup', signupController);

export { authRouter };
