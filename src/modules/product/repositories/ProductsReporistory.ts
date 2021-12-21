import { Product } from '../model/Product';
import { ICreateProductDTO, IProductsRepository } from './IProductsRepository';

class ProductsRepository implements IProductsRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  create({
    name, description, price, duration,
  }: ICreateProductDTO): void {
    const product = new Product();

    Object.assign(product, {
      name,
      description,
      price,
      duration,
      created_at: new Date(),
    });

    this.products.push(product);
  }

  findByName(name:string):Product | undefined {
    const product = this.products.find((product) => product.name === name);

    return product;
  }

  list():Product[] {
    return this.products;
  }
}

export { ProductsRepository };
