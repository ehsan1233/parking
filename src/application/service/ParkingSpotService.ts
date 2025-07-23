import { ParkingSpotResponse } from '~/domain/entities/ParkingSpot';
import { NearbyFreeSpot } from '~/domain/NearbyFreeSpot';

export class ParkingSpotService {
  public static async findNearbyFreeSpot(
    latitude: number,
    longitude: number
  ): Promise<ParkingSpotResponse[]> {
    return NearbyFreeSpot.finder(latitude, longitude);
  }
}
