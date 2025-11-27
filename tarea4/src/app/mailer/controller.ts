import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export class MailerController {

    async sendLetter(req: Request, res: Response) {
        try {
            const { santaEmail, letterContent } = req.body;

            if (!santaEmail || !letterContent) {
                return res.status(400).render('index', { 
                    title: 'Carta a Santa',
                    error: 'Por favor completa todos los campos.',
                    santaEmail,
                    letterContent
                });
            }

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const htmlTemplate = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Carta a Santa</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #f5f5f5;
                    }
                    .container {
                        background: white;
                        padding: 30px;
                        border-radius: 8px;
                        border: 1px solid #ddd;
                    }
                    h1 {
                        color: #333;
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .letter-content {
                        background: #f9f9f9;
                        padding: 20px;
                        border-left: 4px solid #007bff;
                        margin: 20px 0;
                        white-space: pre-line;
                    }
                    .footer {
                        text-align: center;
                        color: #666;
                        font-size: 14px;
                        margin-top: 30px;
                        border-top: 1px solid #ddd;
                        padding-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Carta para Santa</h1>
                    <p>Santa ha recibido una nueva carta:</p>
                    <div class="letter-content">
                        ${letterContent}
                    </div>
                    <div class="footer">
                        <p>Fecha: ${new Date().toLocaleDateString('es-ES')}</p>
                    </div>
                </div>
            </body>
            </html>
            `;

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: santaEmail,
                subject: 'Nueva Carta para Santa',
                html: htmlTemplate
            };

            await transporter.sendMail(mailOptions);

            res.redirect('/success');

        } catch (error) {
            console.error('Error enviando correo:', error);
            res.status(500).render('index', { 
                title: 'Carta a Santa',
                error: 'Hubo un error al enviar la carta. Por favor intenta de nuevo.',
                santaEmail: req.body.santaEmail,
                letterContent: req.body.letterContent
            });
        }
    }
}
