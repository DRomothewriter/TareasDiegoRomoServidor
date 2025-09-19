import express from 'express';
import { getTopHeadlines, getSources } from './controller';
import getQueryString from '../middlewares/getQueryString';

const router = express.Router();

router.get('/', getQueryString, getTopHeadlines);
router.get('/sources', getQueryString, getSources);

export default router;
