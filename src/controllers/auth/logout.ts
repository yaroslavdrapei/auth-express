import { Request, Response } from 'express';

export const logoutController = async (req: Request, res: Response): Promise<void> => {
  res.clearCookie('token', { httpOnly: true, signed: true }).sendStatus(200);
};
