import { Router } from 'express';

import FatController from '../controllers/FaturamentoControllers/FatController';
import {celebrate, Joi, Segments} from 'celebrate'
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const fatRouter = Router();

const fatController = new FatController();



//Create
fatRouter.post(
    '/create',    
    fatController.create);


//Loading
fatRouter.get('/load',fatController.loading);


//update
fatRouter.post('/update/:cod_fat'
,
celebrate({
    [Segments.PARAMS]:{
        cod_fat: Joi.string().uuid().required(),
    }
}),fatController.update);


//Delete
fatRouter.delete('/delete/:cod_fat',
celebrate({
    [Segments.PARAMS]:{
        cod_fat: Joi.string().uuid().required(),
    }
}), fatController.delete);


//Summary Objeto
fatRouter.get('/summary',fatController.execute);


//Return Por Index
fatRouter.get('/exibir/:cod_fat',
celebrate({
    [Segments.PARAMS]:{
        cod_fat: Joi.string().uuid().required(),}
    }),fatController.exibir);




export default fatRouter;
