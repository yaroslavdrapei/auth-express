import { Request, Response } from 'express';
import { User } from '../../types/types';
import { mockUsers } from '../../mock/mockUsers';
import jwt from 'jsonwebtoken';
import { comparePasswords } from '../../utils/utils';

export const loginController = (req: Request, res: Response): void => {
  const body = req.body as User;

  const user = mockUsers.find((u) => u.username === body.username);

  if (!user || !comparePasswords(body.password, user.password)) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const token = jwt.sign(user, process.env.SIGN_KEY as string);

  res.status(200).json({ token });
};
