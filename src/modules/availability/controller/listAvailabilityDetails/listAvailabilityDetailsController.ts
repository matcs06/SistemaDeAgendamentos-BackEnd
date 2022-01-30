import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAvailabilityDetailsService } from '../../services/ListAvailabilityDetailsService';



class ListAvailabilityDetailsController {

  async handle(request: Request, response: Response): Promise<Response> {
    
    const { service_duration } = request.body
    const {id} = request.body


    const listAvailabilityervice = container.resolve(ListAvailabilityDetailsService)

    const all = await listAvailabilityervice.execute(id, service_duration);

    return response.json(all);
  }
}

export { ListAvailabilityDetailsController };