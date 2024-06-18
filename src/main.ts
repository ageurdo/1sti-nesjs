import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionsMiddleware } from './middlewares/exceptions.middleware';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ExceptionsMiddleware());
  const config = new DocumentBuilder()
    .setTitle('Admin auth')
    .setDescription('The Admin API description')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
