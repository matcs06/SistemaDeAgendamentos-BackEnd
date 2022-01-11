import { ProductsRepository } from '../../repositories/implementations/ProductsReporistory';
import { ListProductsService } from '../../services/ListProductsService';
import { ListProductController } from './ListProductController';

const productsRepository = null;

const listProducService = new ListProductsService(productsRepository);
const listProductController = new ListProductController(listProducService);

export { listProductController };
