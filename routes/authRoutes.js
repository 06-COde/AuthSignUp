import express from 'express';

const router = express.Router();
import { signUp } from '../controllers/auth.controller.js';
router.post('/signUp', signUp);
import { signIn } from '../controllers/auth.controller.js';
router.post('/signIn', signIn);


export default router;