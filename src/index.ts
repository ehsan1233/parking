import 'dotenv/config';
import express from 'express';
import rootRouter from './routes/route';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';
import parkingRouter from './routes/route';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/parking', parkingRouter);

app.get('/', rootRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
