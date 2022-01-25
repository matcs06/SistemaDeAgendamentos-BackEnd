import { Product } from '../../entities/Product';
import { ICreateProductDTO, IProductsRepository } from '../IProductsRepository';

import { getRepository, Repository } from "typeorm"

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product)
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
    const product = this.repository.create({
      name,
      description,
      price,
      duration
    })

    await this.repository.save(product)
  }

  async findByName(name:string): Promise<Product | undefined> {
    const product = await this.repository.findOne({ name });

    return product;
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find()
    return products;
  }

  async deleteById(id: string): Promise<void>{

    await this.repository.delete(id)

  }

   async findById(id: string):  Promise<Product | undefined>{

    const product = await this.repository.findOne( id );
    return product;

  }

  public async save(product: Product): Promise<void> {
    await this.repository.save(product);
  }

}

export { ProductsRepository };
