import { User } from '../entities/User';

interface ICreateUserDTO{
   name:string;
   username:string;
   password: string;
}

interface IUserRepository{
   create({
     name, password, username
   }: ICreateUserDTO): Promise<void>;

   deleteById(id:string): Promise<void>;
   findByName(username:string): Promise<User | undefined>;
   findById(username:string): Promise<User | undefined>;
}

export { IUserRepository, ICreateUserDTO };