import { Router } from 'express';

import CargoController from '../../controllers/CargoController/CargoController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const cargoRouter = Router();

const cargoController = new CargoController();



//Create
cargoRouter.post(
    '/create',isAutenticacion, 
    cargoController.create);

//update
cargoRouter.put('/update/:cod_cargo_uuid'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        cod_cargo_uuid: Joi.string().uuid().required(),
    }
}),cargoController.update);


//Delete
cargoRouter.delete('/delete/:cod_cargo_uuid',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        cod_cargo_uuid: Joi.string().uuid().required(),
    }
}), cargoController.delete);


//Summary Objeto
cargoRouter.get('/summary',cargoController.execute);



export default cargoRouter;
