import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, TripsModule],
})
export class AppModule {}
