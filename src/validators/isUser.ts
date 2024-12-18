import { User } from '../types/types';

export const isUser = (obj: any): obj is User => {
  return typeof obj.username === 'string' && typeof obj.password === 'string';
};
