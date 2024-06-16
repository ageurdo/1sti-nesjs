import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionsMiddleware } from './middlewares/exceptions.middleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ExceptionsMiddleware());
  await app.listen(3000);
}
bootstrap();
