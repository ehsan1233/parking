import { injectable, inject } from 'tsyringe';
import { ParkingSpotResponse } from '~/domain/entities/ParkingSpot';
import { IParkingSpotRepository } from '~/domain/repositories/IParkingSpotRepository';

@injectable()
export class NearbyFreeSpot {
  constructor(@inject('IParkingSpotRepository') private repository: IParkingSpotRepository) {}

  public async finder(latitude: number, longitude: number): Promise<ParkingSpotResponse[]> {
    return this.repository.findNearbyFreeSpots(latitude, longitude);
  }
}
