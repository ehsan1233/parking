import { Router } from 'express';
import { getRoot } from '../controllers/controller';
import { reportFreeSpot } from '../controllers/parkingController';

const router = Router();

/**
 * @openapi
 * /api/parking/spots:
 *   post:
 *     summary: Report a free parking spot
 *     description: Accepts coordinates and stores the parking spot in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - latitude
 *               - longitude
 *             properties:
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Missing or invalid input
 */
router.post('/spots', reportFreeSpot);

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
