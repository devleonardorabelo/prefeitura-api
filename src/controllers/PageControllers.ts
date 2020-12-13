import { Request, Response } from 'express';

export = {
  async index(req: Request, res: Response) {
    return res.json('pages');
  },
};
