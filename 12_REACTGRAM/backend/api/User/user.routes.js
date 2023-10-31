import { Router } from 'express';
import { register } from './user.controller.js'
import { validRules, validate } from './validation.middleware.js'
const router = Router();

/* GET users listing. */
router
  .get('/register', register)
  .post('/register', validRules, validate, register);

export default router;