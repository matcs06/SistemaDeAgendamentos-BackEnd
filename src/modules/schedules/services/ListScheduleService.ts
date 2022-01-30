import { inject, injectable } from 'tsyringe';
import { Schedules } from '../entities/Schedules';
import { ISchedulesRepository } from '../repositories/ISchedulesRepository';

interface IRequest{
   name:string;
   description:string;
   price: string;
   duration:string;
}

@injectable()
class ListScheduleService {

  constructor(
    @inject("SchedulesRepository")
    private SchedulesRepository: ISchedulesRepository) {
  }

  async execute(): Promise<Schedules[]> {
    return await this.SchedulesRepository.list();
  }
}

export { ListScheduleService };