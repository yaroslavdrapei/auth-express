import { Router } from 'express';
import { loginController } from '../controllers/auth/login';
import { signupController } from '../controllers/auth/signup';
import { validateUser } from '../middleware/validateUser';

const authRouter = Router();

authRouter.post('/login', validateUser, loginController);
authRouter.post('/signup', validateUser, signupController);

export { authRouter };
