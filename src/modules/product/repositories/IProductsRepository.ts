import { Product } from '../entities/Product';

interface ICreateProductDTO{
   name:string;
   description:string;
   price: string;
   duration:string;
}

interface IProductsRepository{
   findByName(name:string): Promise<Product | undefined>;
   list(): Promise<Product[]>;
   create({
     name, description, duration, price,
   }: ICreateProductDTO): Promise<void>;
   deleteById(id:string): Promise<void>;
   findById(id:string): Promise<Product | undefined>;
   save(product:Product): Promise<void>;
}

export { IProductsRepository, ICreateProductDTO };
