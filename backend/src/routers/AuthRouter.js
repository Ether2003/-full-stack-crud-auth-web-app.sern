/**
 * 
 */
import express from 'express';
const router = express.Router();

import AuthController from '../controllers/AuthController/_.js';
import validateBody from '../middleware/validateBody.js';
import RegisterSchematic from '../schematics/RegisterSchematic.js';
import AuthenticateSchematic from '../schematics/AuthenticateSchematic.js';

router.post('/auth/register',
    validateBody(RegisterSchematic),
    AuthController.registerUser);
    
router.post('/auth/login',
    validateBody(AuthenticateSchematic),
    AuthController.authenticateUser);

export default router;