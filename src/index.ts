import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes/routes';
import * as swaggerDocument from './spec/swagger.json';
import cors from 'cors';
import './ioc/container';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.use(express.json());

RegisterRoutes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('❌ Uncaught error:', err);
  res.status(500).json({
    message: err?.message || 'Unknown error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err?.stack,
  });
});
