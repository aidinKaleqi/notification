import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('notificationQueue')
export class NotificationProcessor {
  @Process('sendNotification')
  async handleSendNotification(job: Job) {
    const { recipient, message } = job.data;
    console.log(`Sending notification to ${recipient}: ${message}`);
  }
}
