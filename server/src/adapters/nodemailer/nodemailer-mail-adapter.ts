import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c31e5169bfa98f",
    pass: "86682bd4f2bf32"
  }
});

export class NodemailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Diogo Scheffer <diogoscheffer9@gmail.com>',
      subject,
      html: body
    });
  }
}
