import { ulid } from 'ulid';
import { injectable } from 'tsyringe';
import { supabase } from '~/lib/supabase';
import { ParkingSpot, ParkingSpotResponse } from '~/domain/entities/ParkingSpot';
import { IParkingSpotRepository } from '~/domain/repositories/IParkingSpotRepository';

@injectable()
export class SupabaseParkingSpotRepository implements IParkingSpotRepository {
  /**
   * Find nearby free parking spots within a radius of the given coordinates
   * @param latitude The latitude coordinate
   * @param longitude The longitude coordinate
   * @returns Promise with array of parking spot responses
   */
  async findNearbyFreeSpots(latitude: number, longitude: number): Promise<ParkingSpotResponse[]> {
    // Earth radius in meters
    const R = 6371000;
    const radiusMeters = 500;
    const toRad = (deg: number) => deg * (Math.PI / 180);
    const latDelta = (radiusMeters / R) * (180 / Math.PI);
    const lonDelta = (radiusMeters / (R * Math.cos(toRad(latitude)))) * (180 / Math.PI);

    const minLat = latitude - latDelta;
    const maxLat = latitude + latDelta;
    const minLon = longitude - lonDelta;
    const maxLon = longitude + lonDelta;

    const { data, error } = await supabase
      .from('FreeSpots')
      .select()
      .gte('latitude', minLat)
      .lte('latitude', maxLat)
      .gte('longitude', minLon)
      .lte('longitude', maxLon);

    if (error) {
      console.error('Error fetching nearby spots:', error);
      throw new Error(error.message);
    }

    return data as ParkingSpotResponse[];
  }

  /**
   * Create a new free parking spot
   * @param spot The parking spot data
   * @returns Promise with the created parking spot response
   */
  async createFreeSpot(spot: ParkingSpot): Promise<ParkingSpotResponse> {
    const { latitude, longitude } = spot;

    const { data, error } = await supabase
      .from('FreeSpots')
      .insert([{ id: ulid(), latitude, longitude }])
      .select()
      .single();

    if (error) {
      console.error('Insert error:', JSON.stringify(error, null, 2));
      throw new Error(error.message);
    }

    return data as ParkingSpotResponse;
  }
}
