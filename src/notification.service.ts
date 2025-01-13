// src/notification/notification.service.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class NotificationService {
  constructor(
    @InjectQueue('notificationQueue') private readonly notificationQueue: Queue,
  ) {}

  async sendNotification(payload: {
    recipient: string;
    message: string;
  }): Promise<{ success: boolean }> {
    // پیام را به صف اضافه می‌کنیم
    await this.notificationQueue.add('sendNotification', payload);
    return { success: true };
  }
}
