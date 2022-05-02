import { Router } from 'express';

import DepartamentoController from '../../controllers/DepartamentoControllers/DepartamentoController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const departamentoRouter = Router();

const departamentoController = new DepartamentoController();


// departamentoRouter.use(isAutenticacion);


//Create
departamentoRouter.post(
    '/create',isAutenticacion,
    departamentoController.create);


departamentoRouter.get(
     '/index/:uuiddeparta',celebrate({
         [Segments.PARAMS]:{
             uuiddeparta:Joi.string().uuid().required()
         }
     }),isAutenticacion,
        departamentoController.index);
    

//update
departamentoRouter.put('/update/:uuiddeparta'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuiddeparta: Joi.string().uuid().required(),
    }
}),departamentoController.update);


//Delete
departamentoRouter.delete('/delete/:uuiddeparta',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuiddeparta: Joi.string().uuid().required(),
    }
}), departamentoController.delete);


//Summary Objeto
departamentoRouter.get('/summary',departamentoController.execute);



export default departamentoRouter;
