import { Request, Response } from 'express';
import { User } from '../../types/types';
import jwt from 'jsonwebtoken';
import { comparePasswords } from '../../utils/utils';
import { getUserByUsername } from '../../repositories/users';

export const loginController = async (req: Request, res: Response): Promise<void> => {
  const body = req.body as User;

  const user = await getUserByUsername(body.username).catch((err) => console.log(err));
  console.log(user);

  if (!user || !comparePasswords(body.password, user.password)) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const token = jwt.sign(user, process.env.SIGN_KEY as string);

  res.status(200).json({ token });
};
