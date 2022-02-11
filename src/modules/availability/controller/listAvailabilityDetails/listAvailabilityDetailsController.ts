import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAvailabilityDetailsService } from '../../services/ListAvailabilityDetailsService';



class ListAvailabilityDetailsController {

  async handle(request: Request, response: Response): Promise<Response> {
    
    const { service_duration } = request.query
    const {id} = request.params

    const listAvailabilityService = container.resolve(ListAvailabilityDetailsService)

    const availabilityDetail = await listAvailabilityService.execute(id, String(service_duration));

    return response.json(availabilityDetail);
  }
}

export { ListAvailabilityDetailsController };