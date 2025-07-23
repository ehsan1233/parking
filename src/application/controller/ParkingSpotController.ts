import { injectable } from 'tsyringe';
import { ParkingSpot, ParkingSpotResponse } from '~/domain/entities/ParkingSpot';
import { Post, Route, Get, Query, Patch } from 'tsoa';
import { Body, Controller } from '@tsoa/runtime';

import { ParkingSpotService } from '~/application/service/ParkingSpotService';

@injectable()
@Route('v1/parking')
export class ParkingSpotController extends Controller {
  constructor(private parkingSpotService: ParkingSpotService) {
    super();
  }

  @Post('spots')
  public async reportFreeSpot(@Body() body: ParkingSpot): Promise<ParkingSpotResponse> {
    return this.parkingSpotService.createFreeSpot(body);
  }

  @Get('free-spots')
  public async getNearbySpots(
    @Query() latitude: number,
    @Query() longitude: number
  ): Promise<ParkingSpotResponse[]> {
    return this.parkingSpotService.findNearbyFreeSpots(latitude, longitude);
  }

  @Patch('take-spot')
  public async takeSpot(@Body() body: { id: string }) {
    return this.parkingSpotService.takeFreeSpot(body.id);
  }
}
