import * as express from 'express';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: User;
      isAuthenticated?: boolean;
    }
  }
}

export type User = {
  username: string;
  password: string;
};
