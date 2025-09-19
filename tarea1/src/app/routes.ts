import { Router } from "express";
import noticiasRoutes from './noticias/routes';
import topHeadlinesRoutes from './top-headlines/routes';

const router = Router();

router.use('/noticias', noticiasRoutes);
router.use('/top-headlines', topHeadlinesRoutes)

export default router;