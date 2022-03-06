import {inject, injectable} from "tsyringe"
import { ITransactionsRepository, ICreateTransactionDTO } from '../repositories/ITransactionsRepository';

interface IRequest{
   title:string;
   value:string;
   formatedDate: string;
}

@injectable()
class CreateTransactionService {

  constructor(
    @inject("TransactionsRepository")
    private TransactionRepository: ITransactionsRepository) {
  }

  async execute({
    title, formatedDate, value
  }:IRequest):Promise<void> {
    
   const type = Number(value) >= 0 ? "income" : "outcome" 
    
    await this.TransactionRepository.create({
      title,
      value,
      formatedDate,
      type
    });
  }
}

export { CreateTransactionService };