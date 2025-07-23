import { ulid } from 'ulid';
import { ParkingSpot, ParkingSpotResponse } from '~/domain/entities/ParkingSpot';
import { Controller, Post, Route, Body, Get, Query } from 'tsoa';
import { ParkingSpotService } from '../service/ParkingSpotService';
import { supabase } from '~/lib/supabase';

@Route('v1/parking')
export class ParkingSpotController extends Controller {
  @Post('spots')
  public async reportFreeSpot(@Body() body: ParkingSpot): Promise<ParkingSpotResponse> {
    const { latitude, longitude } = body;

    const { data, error } = await supabase
      .from('FreeSpots')
      .insert([{ id: ulid(), latitude, longitude }])
      .select()
      .single();

    if (error) {
      console.error('insert error:', JSON.stringify(error, null, 2));
      throw new Error(error.message);
    }

    return data as ParkingSpotResponse;
  }

  @Get('free-spots')
  public async getNearbySpots(
    @Query() latitude: number,
    @Query() longitude: number
  ): Promise<ParkingSpotResponse[]> {
    return ParkingSpotService.findNearbyFreeSpot(latitude, longitude);
  }
}
