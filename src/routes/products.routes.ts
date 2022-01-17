import { Router } from 'express';

import { CreateProductController } from '../modules/product/controller/createProduct/CreateProductController';

import { ListProductController } from '../modules/product/controller/listProduct/ListProductController';

import { DeleteProductController } from '../modules/product/controller/deleteProduc/DeleteProductController';

import { ListSingleProductController } from '../modules/product/controller/listSingleProduct/ListSingleProductController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const productsRoutes = Router();

const createProductController = new CreateProductController()
const listProductController = new ListProductController
const deleteProductController  = new DeleteProductController()
const listSingleProductService  = new ListSingleProductController()

productsRoutes.use(ensureAuthenticated)
productsRoutes.post('/', createProductController.handle);

productsRoutes.get('/', listProductController.handle);

productsRoutes.get("/:id", listSingleProductService.handle)

productsRoutes.delete("/:id", deleteProductController.handle)

export { productsRoutes };
