import { Router } from 'express';

import CarrosController from '../../controllers/CarrosController/CarrosController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const carrosRouter = Router();

const carrosController = new CarrosController();



//Create
carrosRouter.post(
    '/create',isAutenticacion, 
    carrosController.create);

//update
carrosRouter.put('/update/:id_uuid'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        id_uuid: Joi.string().uuid().required(),
    }
}),carrosController.update);


//Delete
carrosRouter.delete('/delete/:id_uuid',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        id_uuid: Joi.string().uuid().required(),
    }
}), carrosController.delete);


//Summary Objeto
carrosRouter.get('/summary',isAutenticacion,carrosController.execute);



export default carrosRouter;
