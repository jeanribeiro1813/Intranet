import { Router } from 'express';

import CargoController from '../controllers/CargosController';

const cargoRouter = Router();

const cargoController = new CargoController();

//Create
cargoRouter.post('/create',cargoController.create);

//Loading
cargoRouter.get('/load',cargoController.loading);





export default cargoRouter;
