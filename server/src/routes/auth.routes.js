import express from 'express';
import { login, register, updateUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').put(updateUser);

export default router;
