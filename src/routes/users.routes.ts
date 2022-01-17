import { Router } from 'express';

import { CreateUserController } from '../modules/users/controller/createUser/CreateUserController';

import { DeleteUserController } from '../modules/users/controller/deleteUser/DeleteUserController';


const usersRoutes = Router();

const createUserController = new CreateUserController()
const deleteUserController  = new DeleteUserController()

usersRoutes.post('/', createUserController.handle);

usersRoutes.delete("/:id", deleteUserController.handle)

export { usersRoutes };