import { Controller, Post, Body } from '@nestjs/common';
import { MailerSenderService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerSenderService) {}

  @Post('/send-email')
  async sendWelcomeEmail(@Body() info: any) {
    await this.mailerService.sendOrder(info);
  }
}
