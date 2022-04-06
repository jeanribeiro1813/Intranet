import { Router } from 'express';

import DepartamentoController from '../../controllers/DepartamentoControllers/DepartamentoController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const departamentoRouter = Router();

const departamentoController = new DepartamentoController();


// departamentoRouter.use(isAutenticacion);


//Create
departamentoRouter.post(
    '/create',isAutenticacion,
    departamentoController.create);

//update
departamentoRouter.put('/update/:coddeparta'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        coddeparta: Joi.string().uuid().required(),
    }
}),departamentoController.update);


//Delete
departamentoRouter.delete('/delete/:coddeparta',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        coddeparta: Joi.string().uuid().required(),
    }
}), departamentoController.delete);


//Summary Objeto
departamentoRouter.get('/summary',departamentoController.execute);



export default departamentoRouter;
