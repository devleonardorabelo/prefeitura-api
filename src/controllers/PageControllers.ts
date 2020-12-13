import { Request, Response } from 'express';
import pages from '../data/pages';

export = {
  async index(req: Request, res: Response) {
    return res.json(pages);
  },
};
