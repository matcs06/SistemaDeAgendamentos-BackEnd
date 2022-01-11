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

  async execute({
    name, description, price, duration,
  }:IRequest):Promise<void> {
    const productAlreadyExists = await this.productsRepository.findByName(name)

    if(productAlreadyExists){
      throw new Error("Product already exists")
    }

    await this.productsRepository.create({
      name, description, duration, price,
    });
  }
}

export { CreateProductService };
