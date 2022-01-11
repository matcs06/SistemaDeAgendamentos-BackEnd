import { Product } from '../../entities/Product';
import { ICreateProductDTO, IProductsRepository } from '../IProductsRepository';

import { getRepository, Repository } from "typeorm"

class ProductsRepository implements IProductsRepository {
  private respository: Repository<Product>;

  constructor() {
    this.respository = getRepository(Product)
  }

 /*  public static getInstance():ProductsRepository {
    if (!ProductsRepository.INSTANCE) {
      ProductsRepository.INSTANCE = new ProductsRepository();
    }

    return ProductsRepository.INSTANCE;
  } */

  async create({
    name, description, price, duration,
  }: ICreateProductDTO): Promise<void> {
    const product = this.respository.create({
      name,
      description,
      price,
      duration
    })

    await this.respository.save(product)
  }

  async findByName(name:string): Promise<Product | undefined> {
    const product = await this.respository.findOne({ name });

    return product;
  }

  async list(): Promise<Product[]> {
    const products = await this.respository.find()
    return products;
  }
}

export { ProductsRepository };
