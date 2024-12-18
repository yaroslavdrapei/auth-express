import bcrypt from 'bcrypt';

export const hashPassword = (password: string, saltRounds = 10): string => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const comparePasswords = (password: string, hashedPassword: string): boolean => {
  return bcrypt.compareSync(password, hashedPassword);
};
