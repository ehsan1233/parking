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

  public async findNearbyFreeSpots(
    latitude: number,
    longitude: number
  ): Promise<ParkingSpotResponse[]> {
    return this.nearbyFreeSpot.finder(latitude, longitude);
  }

  public async createFreeSpot(spot: ParkingSpot): Promise<ParkingSpotResponse> {
    return this.repository.createFreeSpot(spot);
  }

  public async takeFreeSpot(spotId: string): Promise<ParkingSpotResponse> {
    return this.repository.takeFreeSpot(spotId);
  }
}
