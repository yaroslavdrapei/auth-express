import { Request, Response } from 'express';

export const signupController = (req: Request, res: Response): void => {
  const { body } = req;

  res.status(200).json({ message: 'Accepted (signup)', body });
};
