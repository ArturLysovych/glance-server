import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerSenderService {
  constructor(private readonly mailerService: MailerService) {}

  async sendOrder(orderInfo: any): Promise<void> {
    const customer = orderInfo.customer;
    const order = orderInfo.order;

    const orderItems = order.cart.map((product: any) => {
      return `<li>${product.name} - ${product.price}$</li>`;
    }).join('');

    const totalSum = order.cart.reduce((acc: number, product: any) => acc + product.price, 0);

    await this.mailerService.sendMail({
      to: customer.email,
      subject: 'Order Confirmation 😊',
      html: `
        <h2>Dear ${customer.name},</h2>
        <h3>😊Thank you for placing an order with us. Below is the summary of your order:</h3>
        <ul>${orderItems}</ul>
        <h4>💰Total Amount: ${totalSum}$</4>
        <p>🚀Your order will be processed shortly. Thank you for choosing our services! 🚀</p>
        <p>🏬Best regards,<br>Glance</p>
      `,
    });

    await this.mailerService.sendMail({
      to: process.env.MAIL,
      subject: 'New Order! 🎉',
      html: `
        <h2>Order List:</h2>
        <ul>${orderItems}</ul>
        <h3>💰Total Amount: ${totalSum}$</3>
        <h3><h2>Customer:</h2>
          <br>
          👤Name: ${customer.name} 
          <br>
          📱${customer.phone}
          <br>
          📬${customer.email}
          <br>
          🗺${customer.address}
        </h3>
        <p>${new Date().toLocaleString()} 📅</p>
      `,
    });
  }
}
