import { inject, injectable } from 'tsyringe';
import { Availability } from '../entities/Availability';
import { IAvailabilityRepository } from '../repositories/IAvailabilityRepository';

interface IRequest{
   name:string;
   description:string;
   price: string;
   duration:string;
}

@injectable()
class ListAvailabilityService {

  constructor(
    @inject("AvailabilityRepository")
    private availabilityRepository: IAvailabilityRepository) {
  }

  async execute(): Promise<Availability[]> {
    return await this.availabilityRepository.list();
  }
}

export { ListAvailabilityService };