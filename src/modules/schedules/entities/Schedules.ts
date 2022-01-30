import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from "uuid"

@Entity("schedules")
class Schedules{
   @PrimaryColumn()
   id:string;

   @Column()
   customer_name:string;

   @Column()
   phone_number:string;

   @Column()
   service: string;

   @Column()
   date: string;

   @Column()
   start_time: string;

   @Column()
   service_duration: string;

   @CreateDateColumn()
   created_at: Date;

   constructor() {
     if (!this.id) {
      this.id = uuidv4();
     }
   }

}

export {Schedules}