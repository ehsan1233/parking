import { supabase } from '~/lib/supabase';
import { ParkingSpotResponse } from '~/domain/entities/ParkingSpot';

export class NearbyFreeSpot {
  public static async finder(latitude: number, longitude: number): Promise<ParkingSpotResponse[]> {
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
}
