import prisma from '../../lib/prisma';
import { ulid } from 'ulid';
import { ParkingSpot, ParkingSpotResponse } from '~/domain/entities/ParkingSpot';
import { Controller, Post, Route, Body } from 'tsoa';

@Route('v1/parking')
export class ParkingSpotController extends Controller {
  /**
   * report a free parking spot
   */
  @Post('spots')
  public async reportFreeSpot(@Body() body: ParkingSpot): Promise<ParkingSpotResponse> {
    const { latitude, longitude } = body;

    return prisma.freeSpot.create({ data: { id: ulid(), latitude, longitude } });
  }
}
