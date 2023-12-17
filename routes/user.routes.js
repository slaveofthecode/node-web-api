import express from 'express';
import { userControllers } from '../controllers/index.js';

const router = express.Router();

router.get('/user', userControllers.get);
router.get('/user/list', userControllers.list);
router.post('/user/create', (req, res) => { res.send("Here let's create a new use "); });
router.delete('/user/:id', userControllers.remove);

export default router;