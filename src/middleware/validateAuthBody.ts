import { Request, Response, NextFunction } from 'express';
import { isAuthBody } from '../validators/isAuthBody';

export const validateAuthBody = (req: Request, res: Response, next: NextFunction): void => {
  const { body } = req;
  if (!isAuthBody(body)) {
    res.status(400).json({ message: 'Invalid body' });
    return;
  }

  next();
};
