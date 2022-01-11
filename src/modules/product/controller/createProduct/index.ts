import { ProductsRepository } from '../../repositories/implementations/ProductsReporistory';
import { CreateProductService } from '../../services/CreateProductService';
import { CreateProductController } from './CreateProductController';

export default()=>{
   
   const productsRepository = new ProductsRepository()

   const createProductService = new CreateProductService(productsRepository);

   const createProductController = new CreateProductController(createProductService);

   return createProductController

}


