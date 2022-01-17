import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListProductsService } from '../../services/ListProductsService';

class ListProductController {

  async handle(request: Request, response: Response): Promise<Response> {
    
    const listProductService = container.resolve(ListProductsService)

    const all = await listProductService.execute();

    return response.json(all);
  }
}

export { ListProductController };
