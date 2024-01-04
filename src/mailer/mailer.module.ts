import { Module } from '@nestjs/common';
import { MailerController } from './mailer.controller';
import { MailerSenderService } from './mailer.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
  controllers: [MailerController],
  providers: [MailerSenderService],
})
export class MailerModules {}
