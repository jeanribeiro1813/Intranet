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
cargoRouter.put('/update/:uuidcargo'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidcargo: Joi.string().uuid().required(),
    }
}),cargoController.update);


cargoRouter.get(
    '/index/:uuidcargo',celebrate({
        [Segments.PARAMS]:{
            uuidcargo:Joi.string().uuid().required()
        }
    }),isAutenticacion,
       cargoController.index);


//Delete
cargoRouter.delete('/delete/:uuidcargo',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidcargo: Joi.string().uuid().required(),
    }
}), cargoController.delete);


//Summary Objeto
cargoRouter.get('/summary',cargoController.execute);



export default cargoRouter;
