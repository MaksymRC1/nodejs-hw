import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  registerUser,
  loginUser,
  refreshUserSession,
  logoutUser,
} from '../controllers/authController.js';
import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';

const router = Router();

router.post(
  ['/auth/register', '/register'],
  celebrate(registerUserSchema),
  registerUser,
);
router.post(['/auth/login', '/login'], celebrate(loginUserSchema), loginUser);
router.post(['/auth/refresh', '/refresh'], refreshUserSession);
router.post(['/auth/logout', '/logout'], logoutUser);

export default router;
