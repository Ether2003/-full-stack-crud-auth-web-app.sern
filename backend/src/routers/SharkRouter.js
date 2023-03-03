/**
 * 
 */
import express from 'express';
const router = express.Router();

import SharkController from '../controllers/SharkController/_.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
import validateBody from '../middleware/validateBody.js';
import SharkSchematic from '../schematics/SharkSchematic.js';

router.get('/api/sharks',
    isAuthenticated,
    SharkController.getAllSharks);

router.post('/api/sharks',
    isAuthenticated,
    validateBody(SharkSchematic),
    SharkController.createShark);

router.put('/api/sharks/:id',
    isAuthenticated,
    validateBody(SharkSchematic),
    SharkController.updateShark);

router.delete('/api/sharks/:id',
    isAuthenticated,
    SharkController.deleteShark);

export default router;