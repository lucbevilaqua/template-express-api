import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';
import outputFile from '../swagger_output.json';
import accountsRoutes from './accounts.routes';

const routes = Router();

routes.use('/api', [accountsRoutes]);
routes.use('/api-docs', serve, setup(outputFile));

export default routes;
