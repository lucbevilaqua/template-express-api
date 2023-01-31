import { Account } from '@models/account';

export interface IAccountsRepository {
  getAccounts(): Promise<Account[]>;
}
