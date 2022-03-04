import { Router } from 'express';

import CargoController from '../controllers/CargosController';

const cargoRouter = Router();

const cargoController = new CargoController();

//Create
cargoRouter.post('/create',cargoController.create);

//Loading
cargoRouter.get('/load',cargoController.loading);

//update
cargoRouter.put('/update',cargoController.update);





export default cargoRouter;
