import { Request, Response } from 'express';

import { ListProductsService } from '../../services/ListProductsService';

class ListProductController {
  constructor(private listProducService: ListProductsService) {}

  handle(request: Request, response: Response):Response {
    const all = this.listProducService.execute();

    return response.json(all);
  }
}

export { ListProductController };
