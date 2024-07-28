import { Request, Response } from 'express';

import { StatController } from '../controllers'

const statController = new StatController()

export const getTopScores = async (_req: Request, res: Response) => {
  try {    
    const response = await statController.getTopScores();
    res.status(200).json(response);
  } catch (error : any) {
    return res.status(500).json({ message: error?.message });
  }
}