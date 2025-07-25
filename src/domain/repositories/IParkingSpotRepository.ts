import { ParkingSpot, ParkingSpotResponse } from '../entities/ParkingSpot';

export interface IParkingSpotRepository {
  /**
   * Find nearby free parking spots within a radius of the given coordinates
   * @param latitude The latitude coordinate
   * @param longitude The longitude coordinate
   * @returns Promise with an array of parking spot responses
   */
  findNearbyFreeSpots(latitude: number, longitude: number): Promise<ParkingSpotResponse[]>;

  /**
   * Create a new free parking spot
   * @param spot The parking spot data
   * @returns Promise with the created parking spot response
   */
  createFreeSpot(spot: ParkingSpot): Promise<ParkingSpotResponse>;

  /**
   * Takes the requested free parking Spot
   * @param spotId
   @returns Promise with the updated parking spot response
   */
  takeFreeSpot(spotId: string): Promise<ParkingSpotResponse>;
}
