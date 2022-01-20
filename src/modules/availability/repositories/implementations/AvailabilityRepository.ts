import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../shared/errors/AppError";
import { Availability } from "../../entities/Availability";
import { IAvailabilityRepository, ICreateAvailabilityDTO } from "../IAvailabilityRepository";

class AvailabilityRepository implements IAvailabilityRepository{

   private repository: Repository<Availability>

   constructor(){
      this.repository = getRepository(Availability)
   }

   async deleteById(id: string): Promise<void> {
      await this.repository.delete(id)
   }

   async findById(id: string): Promise<Availability | undefined> {
      const availability = await this.repository.findOne(id);

      return availability;
   }

   async list(): Promise<Availability[]> {
      const availabilities = await this.repository.find()
      
      return availabilities; 

   }

   async create(data: ICreateAvailabilityDTO): Promise<void> {
      const availability = this.repository.create(data)
      await this.repository.save(availability)

   }

   async findByDate(date:string): Promise<Availability | undefined> {
      const availability = await this.repository.findOne({date})

      return availability;

   }

}

export {AvailabilityRepository};