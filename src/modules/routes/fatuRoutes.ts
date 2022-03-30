import { Router } from 'express';

import FatController from '../controllers/FaturamentoControllers/FatController';
import {celebrate, Joi, Segments} from 'celebrate'
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const fatRouter = Router();

const fatController = new FatController();



//Create
fatRouter.post(
    '/create',isAutenticacion, 
    fatController.create);

//update
fatRouter.post('/update/:cod_fat'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        cod_fat: Joi.string().uuid().required(),
    }
}),fatController.update);


//Delete
fatRouter.delete('/delete/:cod_fat',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        cod_fat: Joi.string().uuid().required(),
    }
}), fatController.delete);


//Summary Objeto
fatRouter.get('/summary',isAutenticacion,fatController.execute);


//Return Por Index
fatRouter.get('/exibir/:cod_fat',
celebrate({
    [Segments.PARAMS]:{
        cod_fat: Joi.string().uuid().required(),}
    }),fatController.exibir);

//Return Por Usuario
fatRouter.post('/load',
celebrate({
    [Segments.BODY]:{
        usuario: Joi.string().required(),
        mes: Joi.string().required(),
    }
    }),fatController.execuUsers);





export default fatRouter;
