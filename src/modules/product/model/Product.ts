import { v4 as uuidv4 } from 'uuid';

class Product {
  id?: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Product };
