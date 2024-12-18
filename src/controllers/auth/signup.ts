import { Request, Response } from 'express';
import { AuthBody } from '../../types/types';
import { mockUsers } from '../../mock/mockUsers';
import jwt from 'jsonwebtoken';

export const signupController = (req: Request, res: Response): void => {
  const body = req.body as AuthBody;

  const findUser = mockUsers.find((u) => u.username === body.username);

  if (findUser) {
    res.status(409).json({ message: 'Username already exists' });
    return;
  }

  const newUser: AuthBody = {
    username: body.username,
    password: body.password
  };

  mockUsers.push(newUser);

  const token = jwt.sign(newUser, process.env.SIGN_KEY as string);

  res.status(200).json({ token });
};
