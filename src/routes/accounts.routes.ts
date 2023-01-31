import { Router } from 'express';
import AccountsController from '@controllers/accountsController';

const accountsRoutes = Router();

accountsRoutes.get('/accounts', AccountsController.getAccounts);

export default accountsRoutes;
