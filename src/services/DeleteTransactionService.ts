import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import { getCustomRepository  } from 'typeorm';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {

    const transactionRepository = getCustomRepository(TransactionRepository);

    const transaction =  await transactionRepository.findOne(id);

    if(!transaction){
      throw new AppError('transaction does not exists');
    }

    await transactionRepository.remove(transaction);

  }
}

export default DeleteTransactionService;
