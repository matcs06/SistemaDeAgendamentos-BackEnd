import { v4 as uuidv4 } from 'uuid';

import {Column, CreateDateColumn, Entity, PrimaryColumn, } from "typeorm"

@Entity("availability")
class Availability {
  @PrimaryColumn()
  id?: string;
  
  @Column()
  date: string;
  
  @Column()
  morning_start_time: string;
  
  @Column()
  morning_end_time: string;
  
  @Column()
  afternoon_start_time: string;

  @Column()
  afternoon_end_time: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Availability };
