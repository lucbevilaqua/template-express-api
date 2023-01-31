import { IAccountsRepository } from '@interfaces/IAccountsRepository';
import { Account } from '@models/account';
import AccountsRepository from '@repositories/accountsRepository';

class AccountsService {
  private accountsRepository: IAccountsRepository;

  constructor() {
    this.accountsRepository = new AccountsRepository();
  }

  async getAccounts(): Promise<Account[]> {
    const accounts = await this.accountsRepository.getAccounts();
    return accounts;
  }
}

export default new AccountsService();
