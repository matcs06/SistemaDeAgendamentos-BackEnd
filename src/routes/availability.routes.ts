import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateAvailabilityController } from '../modules/availability/controller/createAvailability/CreateAvailabilityController';


const availabilitysRoutes = Router();

const createAvailabilityController = new CreateAvailabilityController()
//const deleteAvailabilityController  = new DeleteAvailabilityController()
availabilitysRoutes.use(ensureAuthenticated)
availabilitysRoutes.post('/', createAvailabilityController.handle);

//AvailabilitysRoutes.delete("/:id", deleteAvailabilityController.handle)

export { availabilitysRoutes };