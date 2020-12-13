import { Request, Response } from 'express';
import posts from '../data/posts';

export = {
  async index(req: Request, res: Response) {
    return res.json(posts);
  },
};
