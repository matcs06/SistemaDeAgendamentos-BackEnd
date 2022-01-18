import { IAvailabilityRepository } from '../repositories/IAvailabilityRepository';
import {inject, injectable} from "tsyringe"
import {AppError} from '../../../shared/errors/AppError';

interface IRequest{
   date:Date;
   morning_start_time:string;
   morning_end_time: string;
   afternoon_start_time:string;
   afternoon_end_time:string;
}

@injectable()
class CreateAvailabilityService {

  constructor(
    @inject("AvailabilityRepository")
    private AvailabilityRepository: IAvailabilityRepository) {
  }

  async execute(data:IRequest):Promise<void> {
    try {
      const AvailabilityAlreadyExists = await this.AvailabilityRepository.findByDateAndTime(data)

      console.log("service")
      console.log(data)

      if(AvailabilityAlreadyExists){
        console.log("av já existe")
        throw new AppError("Availability already exists")
      }

      await this.AvailabilityRepository.create(data)
    } catch (error) {
      throw new AppError("Erro ao criar availability")
      console.log(error)
    }
    
  }
}

export { CreateAvailabilityService };
