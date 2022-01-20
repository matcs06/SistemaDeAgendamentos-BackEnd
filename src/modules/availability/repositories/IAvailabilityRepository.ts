import { Availability } from '../entities/Availability';

interface ICreateAvailabilityDTO{
   date:string;
   morning_start_time:string;
   morning_end_time: string;
   afternoon_start_time:string;
   afternoon_end_time:string;
}

interface IAvailabilityRepository{
   list(): Promise<Availability[]>;
   create(data: ICreateAvailabilityDTO): Promise<void>;
   deleteById(id:string): Promise<void>;
   findById(id:string): Promise<Availability | undefined>;
   findByDate(date:string):Promise<Availability | undefined>
}

export { IAvailabilityRepository, ICreateAvailabilityDTO };