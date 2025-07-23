import { injectable, inject } from 'tsyringe';
import { ParkingSpot, ParkingSpotResponse } from '~/domain/entities/ParkingSpot';
import { IParkingSpotRepository } from '~/domain/repositories/IParkingSpotRepository';
import { NearbyFreeSpot } from '~/domain/NearbyFreeSpot';

@injectable()
export class ParkingSpotService {
  constructor(
    @inject('IParkingSpotRepository') private repository: IParkingSpotRepository,
    @inject(NearbyFreeSpot) private nearbyFreeSpot: NearbyFreeSpot
  ) {}

  /**
   * Find nearby free parking spots
   * @param latitude The latitude coordinate
   * @param longitude The longitude coordinate
   * @returns Promise with array of parking spot responses
   */
  public async findNearbyFreeSpots(
    latitude: number,
    longitude: number
  ): Promise<ParkingSpotResponse[]> {
    return this.nearbyFreeSpot.finder(latitude, longitude);
  }

  /**
   * Create a new free parking spot
   * @param spot The parking spot data
   * @returns Promise with the created parking spot response
   */
  public async createFreeSpot(spot: ParkingSpot): Promise<ParkingSpotResponse> {
    return this.repository.createFreeSpot(spot);
  }
}
