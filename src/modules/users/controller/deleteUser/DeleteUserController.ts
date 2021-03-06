import { Request, Response } from 'express';
import {container} from "tsyringe"

import { DeleteUserService } from '../../services/DeleteUserService';

class DeleteUserController {
 
  async handle(request: Request, response: Response):Promise<Response> {
    const {
      id
    } = request.params;

    const deleteUserService = container.resolve(DeleteUserService)

    await deleteUserService.execute(id);

    return response
      .status(200)
      .json({ message: 'User successfully deleted!!' });
    
  }
}

export { DeleteUserController };