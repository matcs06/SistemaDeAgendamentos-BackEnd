import { ISchedulesRepository } from '../repositories/ISchedulesRepository';
import {inject, injectable} from "tsyringe"
import {AppError} from '../../../shared/errors/AppError';
import { IAvailabilityRepository } from '../../availability/repositories/IAvailabilityRepository';
import { addTimes } from '../../../utils/AddTimes';

interface IRequest{
   customer_name:string;
   service:string;
   date: string;
   start_time:string;
   service_duration:string;
   phone_number: string;
}


@injectable()
class CreateSchedulesService {

  constructor(
    @inject("SchedulesRepository")
    private SchedulesRepository: ISchedulesRepository,
    
    @inject("AvailabilityRepository")
    private AvailabilityRepository: IAvailabilityRepository,
    
   ) {}

  async execute(data:IRequest):Promise<void> {
   
    const availability = await this.AvailabilityRepository.findByDate(data.date)

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

    //It possible to compare to strings"time" if they are in HH:MM:SS format
    //Checando se  tempo escolhido está dentro do definido no availability
    if(availabilityStartTime <= data.start_time && availabilityEndTime > data.start_time ){
 
      const startTimeAndDuration = addTimes(data.start_time, data.service_duration)

      if(startTimeAndDuration+":00" > availabilityEndTime){
         throw new AppError("Your schedule is crossing the end time of the availability")
      }

    }else{
       throw new AppError("Your schedule is out of the availability time for this date")
    }

    const schedules = await this.SchedulesRepository.list()
    
    if(schedules){

      schedules.map((schedule)=> {

         if(schedule.date === data.date){
            //Checando se já tem um agendamento no período escolhido de um novo 
            //agendamento
            const scheduledEndTime = addTimes(schedule.start_time, schedule.service_duration)
            const newTimeEnd = addTimes(data.start_time, data.service_duration)

            if(data.start_time >= schedule.start_time && data.start_time < scheduledEndTime + ":00"){
               throw new AppError("There is already a schedule in this time range")
            }

            if(newTimeEnd + ":00" > schedule.start_time && newTimeEnd + ":00" < scheduledEndTime + ":00"){
               throw new AppError("There is already a schedule in this time range")
            }

         }
         
      })

    }

    await this.SchedulesRepository.create(data)
  
  }
}

export { CreateSchedulesService };
