import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateScheduleController } from '../modules/schedules/controller/createSchedule/CreateScheduleController';

/* import { ListAvailabilityController } from '../modules/schedule/controller/listAvailability/ListAvailabilityController';

import { DeleteAvailabilityController } from '../modules/schedule/controller/deleteAvailability/DeleteAvailabilityController'; */

const schedulesRoutes = Router();

const createScheduleController = new CreateScheduleController()
/* const listAvailabilityController = new ListAvailabilityController()
const deleteAvailabilityController  = new DeleteAvailabilityController() */

schedulesRoutes.use(ensureAuthenticated)

schedulesRoutes.post('/', createScheduleController.handle);
/* schedulesRoutes.get("/", listAvailabilityController.handle)
schedulesRoutes.delete("/:id", deleteAvailabilityController.handle) */

export { schedulesRoutes };