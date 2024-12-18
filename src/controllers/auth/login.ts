import { Request, Response } from 'express';

export const loginController = (req: Request, res: Response): void => {
  const { body } = req.body;

  res.status(200).json({ message: 'Accepted (login)', body });
};
