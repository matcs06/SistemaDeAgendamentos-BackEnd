import { Product } from '../model/Product';
import { IProductsRepository } from '../repositories/IProductsRepository';

interface IRequest{
   name:string;
   description:string;
   price: string;
   duration:string;
}

class ListProductsService {
  private productsRepository: IProductsRepository;

  constructor(productsRepository: IProductsRepository) {
    this.productsRepository = productsRepository;
  }

  execute():Product[] {
    return this.productsRepository.list();
  }
}

export { ListProductsService };
