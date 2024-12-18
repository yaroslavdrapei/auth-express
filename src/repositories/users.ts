import { User } from '../types/types';
import { psql } from './db';

export const getUsers = async (): Promise<User[]> => {
  const users: User[] = await psql`
    select username, password from users;
  `;

  return users;
};

export const getUserByUsername = async (username: string): Promise<User | null> => {
  const users: User[] = await psql`
    select * from users where username = ${username};
  `;

  return users[0];
};

export const insertUser = async (user: User): Promise<void> => {
  const { username, password } = user;
  await psql`
    insert into users (username, password)
    values
      (${username}, ${password});
  `;
};
