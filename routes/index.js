import express from 'express';
import routerProduct from './product.routes.js';
import routerUser from './user.routes.js';

const router = express.Router();

router.use(routerUser);
router.use(routerProduct);

export default router;
