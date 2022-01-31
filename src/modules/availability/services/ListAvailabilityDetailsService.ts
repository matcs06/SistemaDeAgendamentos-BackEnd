import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import { Availability } from '../entities/Availability';
import { IAvailabilityRepository } from '../repositories/IAvailabilityRepository';
import {addTimes} from "../../../utils/AddTimes"



interface AvailabilityDetail{
  availability: Availability,
  morning_available_times: Array<string>
  afternoon_available_times: Array<string>
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

    var afternoon_empty = true;
    var morning_empty = true;
    var availability_aft_start_time = '';
    var availability_aft_end_time = '';
    var availability_mng_start_time = '';
    var availability_mng_end_time = '';

    if(availability.afternoon_start_time != "" && availability.afternoon_start_time !=""){
       afternoon_empty = false;
        availability_aft_start_time = availability.afternoon_start_time
        availability_aft_end_time = availability.afternoon_end_time
    }

    if(availability.morning_start_time != "" && availability.morning_start_time !=""){
       morning_empty = false
        availability_mng_start_time = availability.morning_start_time
        availability_mng_end_time = availability.morning_end_time
    }
    
    var morning_times = []
    var afternoon_times = []

    if(!morning_empty){
      while(availability_mng_start_time <= availability_mng_end_time){

        if(addTimes(availability_mng_start_time, service_duration) > availability_mng_end_time){
          break;
        }

        morning_times.push(availability_mng_start_time)
        availability_mng_start_time = addTimes(availability_mng_start_time, service_duration)
        availability_mng_start_time = availability_mng_start_time + ":00"

      }
    }
    
    if(!afternoon_empty){
      while(availability_aft_start_time <= availability_aft_end_time){
        
        if(addTimes(availability_aft_start_time, service_duration) > availability_aft_end_time){
          break;
        }

        afternoon_times.push(availability_aft_start_time)
        availability_aft_start_time = addTimes(availability_aft_start_time, service_duration)
        availability_aft_start_time = availability_aft_start_time + ":00"

      }
    }


    const availabilityDetail = {
      availability,
      morning_available_times: morning_times,
      afternoon_available_times: afternoon_times
    }

    return availabilityDetail;
    
  }
}

export { ListAvailabilityDetailsService };