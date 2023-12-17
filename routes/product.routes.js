import express from 'express';
import { productControllers } from '../controllers/index.js';

const router = express.Router();

router.get('/product', productControllers.get);
router.post('/product/create', productControllers.create);

export default router;