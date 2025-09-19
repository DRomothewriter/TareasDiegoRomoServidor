import express from 'express';
import { getNoticias } from './controller'
import getQueryString from '../middlewares/getQueryString';

const router = express.Router()

router.get("/", getQueryString, getNoticias);
console.log("here")

export default router;