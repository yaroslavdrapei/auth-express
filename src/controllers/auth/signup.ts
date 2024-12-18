import { Request, Response } from 'express';
import { User } from '../../types/types';
import { mockUsers } from '../../mock/mockUsers';
import jwt from 'jsonwebtoken';
import { hashPassword } from '../../utils/utils';

export const signupController = (req: Request, res: Response): void => {
  const body = req.body as User;

  const findUser = mockUsers.find((u) => u.username === body.username);

  if (findUser) {
    res.status(409).json({ message: 'Username already exists' });
    return;
  }

  const newUser: User = {
    username: body.username,
    password: hashPassword(body.password)
  };

  mockUsers.push(newUser);

  const token = jwt.sign(newUser, process.env.SIGN_KEY as string);

  res.status(200).json({ token });
};
