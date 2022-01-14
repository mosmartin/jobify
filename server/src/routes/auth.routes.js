import express from 'express';
import { login, register, updateUser } from '../controllers/auth.controller';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').post(updateUser);

export default router;
