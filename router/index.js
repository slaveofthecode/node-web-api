import express from 'express';
import routerProduct from './product.router.js';
import routerUser from './user.router.js';

const router = express.Router();

router.use(routerUser);
router.use(routerProduct);

export default router;
