import { IAccountsRepository } from '@interfaces/IAccountsRepository';
import { Account } from '@models/account';

export default class AccountsRepository implements IAccountsRepository {
  async getAccounts(): Promise<Account[]> {
    const users: Array<Account> = [];
    return Object.values(users);
  }
}
