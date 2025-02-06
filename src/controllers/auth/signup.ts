import { Request, Response } from 'express';
import { User } from '../../types/types';
import jwt from 'jsonwebtoken';
import { hashPassword } from '../../utils/utils';
import { getUserByUsername, insertUser } from '../../repositories/users';

export const signupController = async (req: Request, res: Response): Promise<void> => {
  const body = req.body as User;

  const findUser = await getUserByUsername(body.username).catch((err) => console.log(err));

  if (findUser) {
    res.status(409).json({ message: 'Username already exists' });
    return;
  }

  const newUser: User = {
    username: body.username,
    password: hashPassword(body.password)
  };

  await insertUser(newUser).catch((err) => console.log(err));

  const token = jwt.sign(newUser, process.env.SIGN_KEY as string);

  res.cookie('token', token, { httpOnly: true, signed: true });
  res.sendStatus(200);
};
