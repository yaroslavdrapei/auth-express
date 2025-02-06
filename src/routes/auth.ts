import { Router } from 'express';
import { loginController } from '../controllers/auth/login';
import { signupController } from '../controllers/auth/signup';
import { validateUser } from '../middleware/validateUser';
import { logoutController } from '../controllers/auth/logout';

const authRouter = Router();

authRouter.post('/login', validateUser, loginController);
authRouter.post('/signup', validateUser, signupController);
authRouter.post('/logout', logoutController);

export { authRouter };
