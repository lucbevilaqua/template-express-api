import { Request, Response } from 'express';
import AccountsService from '@services/accountsService';

class AccountsController {
  async getAccounts(req: Request, res: Response) {
    try {
      const users = await AccountsService.getAccounts();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new AccountsController();
