import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class TripsDto {
  @IsString()
  @IsNotEmpty()
  departure: string;
  @IsString()
  @IsNotEmpty()
  arrival: string;
  @IsDate()
  @IsNotEmpty()
  scheduledAt: Date;
}
