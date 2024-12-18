import { Request, Response } from 'express';
import { AuthBody } from '../../types/types';
import { mockUsers } from '../../mock/mockUsers';
import jwt from 'jsonwebtoken';

export const loginController = (req: Request, res: Response): void => {
  const body = req.body as AuthBody;

  const user = mockUsers.find((u) => u.username === body.username);

  if (!user || user.password !== body.password) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const token = jwt.sign(user, process.env.SIGN_KEY as string);

  res.status(200).json({ token });
};
