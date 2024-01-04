import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerModules } from './mailer/mailer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ProductsModule, MailerModules,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL,
          pass: process.env.MAIL_PASSWORD,
        },
      },
    }),
  ]
})
export class AppModule {}
