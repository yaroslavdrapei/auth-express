import { Request, Response, NextFunction } from 'express';
import { isUser } from '../validators/isUser';

export const validateUser = (req: Request, res: Response, next: NextFunction): void => {
  const { body } = req;
  if (!isUser(body)) {
    res.status(400).json({ message: 'Invalid body' });
    return;
  }

  next();
};
