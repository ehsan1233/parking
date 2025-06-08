import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { ulid } from 'ulid';

export const reportFreeSpot = async (req: Request, res: Response): Promise<void> => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    res.status(400).json({ error: 'Latitude and longitude are required' });
    return;
  }

  const freeSpot = await prisma.freeSpot.create({ data: { id: ulid(), latitude, longitude } });

  res.status(201).json(freeSpot);
};
