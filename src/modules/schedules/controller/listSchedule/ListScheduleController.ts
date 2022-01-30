import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListScheduleService } from '../../services/ListScheduleService';

class ListScheduleController {

  async handle(request: Request, response: Response): Promise<Response> {
    
    const listScheduleService = container.resolve(ListScheduleService)

    const all = await listScheduleService.execute();

    return response.json(all);
  }
}

export { ListScheduleController };
