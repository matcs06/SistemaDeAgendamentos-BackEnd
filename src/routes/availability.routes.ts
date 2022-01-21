import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateAvailabilityController } from '../modules/availability/controller/createAvailability/CreateAvailabilityController';

import { ListAvailabilityController } from '../modules/availability/controller/listAvailability/ListAvailabilityController';

import { DeleteAvailabilityController } from '../modules/availability/controller/deleteAvailability/DeleteAvailabilityController';

const availabilitysRoutes = Router();

const createAvailabilityController = new CreateAvailabilityController()
const listAvailabilityController = new ListAvailabilityController()
const deleteAvailabilityController  = new DeleteAvailabilityController()

availabilitysRoutes.use(ensureAuthenticated)

availabilitysRoutes.post('/', createAvailabilityController.handle);
availabilitysRoutes.get("/", listAvailabilityController.handle)
availabilitysRoutes.delete("/:id", deleteAvailabilityController.handle)

export { availabilitysRoutes };