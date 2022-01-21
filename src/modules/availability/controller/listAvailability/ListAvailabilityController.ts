import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAvailabilityService } from '../../services/ListAvailabilitiesService';

class ListAvailabilityController {

  async handle(request: Request, response: Response): Promise<Response> {
    
    const listAvailabilityervice = container.resolve(ListAvailabilityService)

    const all = await listAvailabilityervice.execute();

    return response.json(all);
  }
}

export { ListAvailabilityController };
