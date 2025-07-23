import { injectable } from 'tsyringe';
import { ParkingSpot, ParkingSpotResponse } from '~/domain/entities/ParkingSpot';
import { Post, Route, Get, Query } from 'tsoa';
import { Body, Controller } from '@tsoa/runtime';

import { ParkingSpotService } from '../service/ParkingSpotService';

@injectable()
@Route('v1/parking')
export class ParkingSpotController extends Controller {
  constructor(private parkingSpotService: ParkingSpotService) {
    super();
  }

  /**
   * Report a new free parking spot
   */
  @Post('spots')
  public async reportFreeSpot(@Body() body: ParkingSpot): Promise<ParkingSpotResponse> {
    return this.parkingSpotService.createFreeSpot(body);
  }

  /**
   * Get nearby free parking spots
   * @param latitude The latitude coordinate
   * @param longitude The longitude coordinate
   * @returns Array of nearby free parking spots
   */
  @Get('free-spots')
  public async getNearbySpots(
    @Query() latitude: number,
    @Query() longitude: number
  ): Promise<ParkingSpotResponse[]> {
    return this.parkingSpotService.findNearbyFreeSpots(latitude, longitude);
  }
}
