import { Router } from 'express';
import { register } from '../controllers/authControllers';

const authRouters = Router();

authRouters.post('/register', register);

export default authRouters;
