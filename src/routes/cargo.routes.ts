import { Router } from 'express';

import CargoController from '../controllers/PilotesController';

const cargoRouter = Router();

const cargoController = new CargoController();

//Pegando os Dados quando o usuario clica em cima do ponto (ficha)
cargoRouter.get('/dadospontos',cargoController.execute);
//Update de Dados da ficha 
// pilotesRouter.put('/update:id',pilotesController.upById);

cargoRouter.post('/target', cargoController.loadById);





export default cargoRouter;
