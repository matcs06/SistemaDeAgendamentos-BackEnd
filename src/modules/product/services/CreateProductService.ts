import { IProductsRepository } from '../repositories/IProductsRepository';

interface IRequest{
   name:string;
   description:string;
   price: string;
   duration:string;
}

class CreateProductService {
  private productsRepository: IProductsRepository;

  constructor(productsRepository: IProductsRepository) {
    this.productsRepository = productsRepository;
  }

  execute({
    name, description, price, duration,
  }:IRequest):void {
    if (this.productsRepository.findByName(name)) {
      throw new Error('This product already exists');
    }

    this.productsRepository.create({
      name, description, duration, price,
    });
  }
}

export { CreateProductService };
