import { v4 as uuidv4 } from 'uuid';

import {Column, CreateDateColumn, Entity, PrimaryColumn, } from "typeorm"

@Entity("products")
class Product {
  @PrimaryColumn()
  id?: string;
  
  @Column()
  name: string;
  
  @Column()
  description: string;
  
  @Column()
  price: string;
  
  @Column()
  duration: string;
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Product };
