import { Transactions } from '../entities/Transactions';

interface ICreateTransactionDTO{
   title:string;
   value:string;
   formatedDate: string;
   type: string;
}

interface ITransactionsRepository{
   create({
      title, formatedDate, value
   }: ICreateTransactionDTO): Promise<void>;

   deleteById(id:string): Promise<void>;
   findById(username:string): Promise<Transactions | undefined>;
   list():Promise<Transactions[]>
}

export { ITransactionsRepository, ICreateTransactionDTO };