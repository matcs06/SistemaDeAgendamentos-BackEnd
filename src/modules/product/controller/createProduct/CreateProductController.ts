import { Request, Response } from 'express';

import { CreateProductService } from '../../services/CreateProductService';

class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

  async handle(request: Request, response: Response):Promise<Response> {
    const {
      name, description, price, duration,
    } = request.body;

    await this.createProductService.execute({
      name, price, description, duration,
    });

    return response.status(201).send();
  }
}

export { CreateProductController };
