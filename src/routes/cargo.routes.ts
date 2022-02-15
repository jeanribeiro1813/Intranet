import { Router } from 'express';

import CargoController from '../controllers/CargosController';

const cargoRouter = Router();

const cargoController = new CargoController();

//Pegando os Dados quando o usuario clica em cima do ponto (ficha)
cargoRouter.get('/dadospontos',cargoController.execute);

//Update de Dados da ficha 
cargoRouter.post('/update',cargoController.upById);

//Pegar o usuario por id
cargoRouter.post('/target', cargoController.loadById);





export default cargoRouter;
