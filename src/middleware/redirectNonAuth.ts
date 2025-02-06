import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const redirectNonAuth = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.signedCookies.token;

  try {
    const { username, password } = jwt.verify(token as string, process.env.SIGN_KEY as string) as {
      username: string;
      password: string;
    };

    req.user = { username, password };
    req.isAuthenticated = true;

    next();
  } catch (e) {
    res.redirect('/auth');
  }
};
