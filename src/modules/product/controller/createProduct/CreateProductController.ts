import { Request, Response } from 'express';
import {container} from "tsyringe"

import { CreateProductService } from '../../services/CreateProductService';

class CreateProductController {
 
  async handle(request: Request, response: Response):Promise<Response> {
    const {
      name, description, price, duration,
    } = request.body;

    const createProductService = container.resolve(CreateProductService)

    await createProductService.execute({
      name, price, description, duration,
    });

    return response.status(201).send();
  }
}

export { CreateProductController };
