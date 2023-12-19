import express from 'express';
import { userControllers } from '../controllers/index.js';
import securityMiddleware from '../middlewares/security/first.middlewares.js';
import secondMiddleware from '../middlewares/security/second.middlewares.js';

const router = express.Router();

router.get('/user', securityMiddleware, secondMiddleware, userControllers.get);
router.get('/user/list', userControllers.list);
router.post('/user/create', (req, res) => { res.send("Here let's create a new use "); });
router.delete('/user/:id', userControllers.remove);

export default router;