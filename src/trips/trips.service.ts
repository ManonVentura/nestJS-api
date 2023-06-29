import { Injectable } from '@nestjs/common';
import { User, Bookmark, Trip } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TripsDto } from './dto';
@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}
  addATrip(dto: TripsDto) {
    return { msg: 'I have signed up' };
  }
  getAllTrips() {
    return { msg: 'I have signed in' };
  }
  getLastTrip() {
    return { msg: 'I have signed in' };
  }
  deleteTrips() {
    return { msg: 'I have signed in' };
  }
}
