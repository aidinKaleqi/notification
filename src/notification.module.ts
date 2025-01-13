import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { NotificationProcessor } from './notification.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'notificationQueue',
      redis: {
        host: process.env.REDIS_HOST,
        port: + process.env.REDIS_PORT,
      },
    }),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationProcessor],
})
export class NotificationModule {}
