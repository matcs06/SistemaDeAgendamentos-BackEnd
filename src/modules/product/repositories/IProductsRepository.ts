import { Product } from '../model/Product';

interface ICreateProductDTO{
   name:string;
   description:string;
   price: string;
   duration:string;
}

interface IProductsRepository{
   findByName(name:string): Product | undefined;
   list(): Product[];
   create({
     name, description, duration, price,
   }: ICreateProductDTO):void
}

export { IProductsRepository, ICreateProductDTO };
