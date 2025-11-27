import { Router } from 'express';
import mailerRoutes from './mailer/routes';

const router = Router();

// Ruta para mostrar el formulario principal
router.get('/', (req, res) => {
    res.render('index', { title: 'Carta a Santa' });
});

// Ruta de éxito
router.get('/success', (req, res) => {
    res.render('success', { title: 'Carta Enviada Exitosamente' });
});

// Rutas del mailer
router.use('/', mailerRoutes);

export default router;
