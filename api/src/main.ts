import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('FDJ Football Leagues')
    .setDescription('Technical test')
    .setVersion('1.0')
    .build()
  ;
  const document = SwaggerModule.createDocument(app, options);

  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    }
  }));
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
