import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from "uuid"

@Entity("transaction")
class Transactions{
   @PrimaryColumn()
   id:string;

   @Column()
   title:string;

   @Column()
   value:string;

   @Column()
   type: string;

   @Column()
   formatedDate: string;

   @CreateDateColumn()
   created_at: Date;

   constructor() {
     if (!this.id) {
      this.id = uuidv4();
     }
   }

}

export {Transactions}