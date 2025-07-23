import 'reflect-metadata';
import { container } from 'tsyringe';
import { IocContainer } from '@tsoa/runtime';
import { IParkingSpotRepository } from '~/domain/repositories/IParkingSpotRepository';
import { SupabaseParkingSpotRepository } from '~/infrastructure/repositories/SupabaseParkingSpotRepository';
import { NearbyFreeSpot } from '~/domain/NearbyFreeSpot';
import { ParkingSpotService } from '~/application/service/ParkingSpotService';
import { ParkingSpotController } from '~/application/controller/ParkingSpotController';

// Register repositories
container.register<IParkingSpotRepository>('IParkingSpotRepository', {
  useClass: SupabaseParkingSpotRepository,
});

// Register domain services
container.register(NearbyFreeSpot, { useClass: NearbyFreeSpot });

// Register application services
container.register(ParkingSpotService, { useClass: ParkingSpotService });

// Register controllers
container.register(ParkingSpotController, { useClass: ParkingSpotController });

// Export the iocContainer for tsoa
export const iocContainer: IocContainer = {
  get: <T>(controller: any): T => {
    return container.resolve<T>(controller);
  },
};
