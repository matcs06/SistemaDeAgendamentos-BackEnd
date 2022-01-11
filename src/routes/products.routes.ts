import { Router } from 'express';

import createProductController  from '../modules/product/controller/createProduct';
import { listProductController } from '../modules/product/controller/listProduct';

const productsRoutes = Router();

productsRoutes.post('/', (request, response) => {
   createProductController().handle(request, response)
});

productsRoutes.get('/', (request, response) => listProductController.handle(request, response));

export { productsRoutes };
