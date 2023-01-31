import swaggerAutogen from 'swagger-autogen';

const outputFile = './src/swagger_output.json';
const endpointsFiles = ['./src/routes/index.ts'];

const options = {
  info: {
    title: 'Template API',
    description: 'Template de uma API express usando typescript.',
  },
  host: process.env.HOST || 'localhost:3000',
  schemes: ['http', 'https'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'authorization',
      in: 'header',
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const swaggerDocument = swaggerAutogen(outputFile, endpointsFiles, options);

export default swaggerDocument;
