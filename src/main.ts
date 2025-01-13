import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { NotificationModule } from './notification.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 8002);
}

bootstrap();
