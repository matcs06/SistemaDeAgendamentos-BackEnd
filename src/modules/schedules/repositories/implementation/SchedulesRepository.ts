import { getRepository, Repository } from "typeorm";
import { Schedules } from "../../entities/Schedules";
import { ICreateSchedulesDTO, ISchedulesRepository } from "../ISchedulesRepository";

class SchedulesRepository implements ISchedulesRepository{

   private repository: Repository<Schedules>

   constructor(){
      this.repository = getRepository(Schedules)
   }

   async deleteById(id: string): Promise<void> {
      await this.repository.delete(id)
   }

   async findById(id: string): Promise<Schedules | undefined> {
      const schedule = await this.repository.findOne(id);

      return schedule;
   }

   async list(): Promise<Schedules[]> {
      const schedules = await this.repository.find()
      
      return schedules; 

   }

   async create(data: ICreateSchedulesDTO): Promise<void> {
      const schedules = this.repository.create(data)
      await this.repository.save(schedules)

   }

   async findByPhone(phone_number:string): Promise<Schedules | undefined> {
      const schedules = await this.repository.findOne({phone_number})

      return schedules;

   }

}

export {SchedulesRepository};