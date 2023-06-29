import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //makes sure that we only get the info we want in the body (ex: if we want password and email and there is also id in the body, it wont get id)
    }),
  );
  await app.listen(3333);
}
bootstrap();
