import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { TripService } from './trips.service';
import { TripsDto } from './dto';

@Controller('tripinous')
export class TripController {
  constructor(private tripService: TripService) {}

  @Post('trips')
  addTrip(@Body() dto: TripsDto) {
    return this.tripService.addATrip(dto);
  }

  @Get('trips')
  allTrips() {
    return this.tripService.getAllTrips();
  }
  @Get('lastTrip')
  lastTrip() {
    return this.tripService.getLastTrip();
  }
  @Delete('trips')
  deleteTrip() {
    return this.tripService.deleteTrips();
  }
}
