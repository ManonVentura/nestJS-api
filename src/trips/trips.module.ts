import { Module } from '@nestjs/common';
import { TripController } from './trips.controller';
import { TripService } from './trips.service';

@Module({
  controllers: [TripController],
  providers: [TripService],
})
export class TripsModule {}
