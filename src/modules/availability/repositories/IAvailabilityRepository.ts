import { Availability } from '../entities/Availability';

interface ICreateAvailabilityDTO{
   date:Date;
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
   findByDateAndTime(data: ICreateAvailabilityDTO):Promise<Availability>
}

export { IAvailabilityRepository, ICreateAvailabilityDTO };