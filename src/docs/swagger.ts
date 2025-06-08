import swaggerJsdoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Parking API',
      version: '1.0.0',
      description: 'API documentation for the Parking project',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    paths: {},
  },
  apis: ['src/routes/*.ts'], // <== JSDoc comments will be parsed from here
};

export const swaggerSpec = swaggerJsdoc(options);
