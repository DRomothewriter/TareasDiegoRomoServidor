import { Router } from 'express';
import { MailerController } from './controller';

const router = Router();
const mailerController = new MailerController();

// Ruta para enviar la carta a Santa
router.post('/send-letter', mailerController.sendLetter);

export default router;