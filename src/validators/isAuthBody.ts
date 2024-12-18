import { AuthBody } from '../types/types';

export const isAuthBody = (obj: any): obj is AuthBody => {
  return typeof obj.username === 'string' && typeof obj.password === 'string';
};
