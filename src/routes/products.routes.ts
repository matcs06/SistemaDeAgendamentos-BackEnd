import { Request, Response, Router } from 'express';

import { ProductsRepository } from '../modules/product/repositories/ProductsReporistory';
import { CreateProductService } from '../modules/product/services/CreateProductService';
import { ListProductsService } from '../modules/product/services/ListProductsService';

const productsRoutes = Router();
const productsRepository = new ProductsRepository();

productsRoutes.post('/', (request:Request, response:Response) => {
  const {
    name, description, price, duration,
  } = request.body;

  const createProductService = new CreateProductService(productsRepository);

  createProductService.execute({
    name, price, description, duration,
  });

  return response.status(201).send();
});

productsRoutes.get('/', (request:Request, response:Response) => {
  const listProductsService = new ListProductsService(productsRepository);

  const all = listProductsService.execute();

  return response.json(all);
});

export { productsRoutes };
