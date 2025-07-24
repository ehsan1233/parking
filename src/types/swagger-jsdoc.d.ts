declare module 'swagger-jsdoc' {
  import { OpenAPIV3 } from 'openapi-types';

  export interface Options {
    definition: OpenAPIV3.Document;
    apis: string[];
  }

  export default function swaggerJsdoc(options: Options): OpenAPIV3.Document;
}
