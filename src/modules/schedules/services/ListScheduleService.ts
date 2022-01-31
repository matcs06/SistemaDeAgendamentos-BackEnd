import { inject, injectable } from 'tsyringe';
import { Schedules } from '../entities/Schedules';
import { ISchedulesRepository } from '../repositories/ISchedulesRepository';

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