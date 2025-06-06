import { Router } from 'express';
import { getRoot } from '../controllers/controller';

const router = Router();


/**
 * @openapi
 * /:
 *   get:
 *     summary: Root endpoint
 *     description: Returns a greeting
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', getRoot);

export default router;

