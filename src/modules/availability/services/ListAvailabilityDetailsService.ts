import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import { Availability } from '../entities/Availability';
import { IAvailabilityRepository } from '../repositories/IAvailabilityRepository';

interface AvailabilityDetail{
   availability: Availability,
   detail:{
     available_times: AvailableTime[]
   }
}

interface AvailableTime{
  time: string
}


@injectable()
class ListAvailabilityDetailsService {

  constructor(
    @inject("AvailabilityRepository")
    private availabilityRepository: IAvailabilityRepository) {
  }

  async execute(id:string, service_duration:string): Promise<AvailabilityDetail> {
    const availability =  await this.availabilityRepository.findById(id);

    if(!availability){
       throw new AppError("Availability does not exists for this date")
    }

    var availabilityStartTime;
    var availabilityEndTime;

    if(availability.afternoon_start_time != "" && availability.afternoon_start_time !=""){
       availabilityStartTime = availability.afternoon_start_time
       availabilityEndTime   = availability.afternoon_start_time
    }else{
       availabilityStartTime = availability.morning_start_time
       availabilityEndTime   = availability.morning_end_time
    }

    


  }
}

export { ListAvailabilityDetailsService };