import { Request, Response } from 'express';

export const getRoot = (req: Request, res: Response) => {
  res.send('Hello from route controller!');
};
