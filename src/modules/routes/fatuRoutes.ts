import { Router } from 'express';

import FatController from '../controllers/FaturamentoControllers/FatController';
import DeleteControllerService from '../controllers/FaturamentoControllers/DeleteController';
import {celebrate, Joi, Segments} from 'celebrate'

const fatRouter = Router();

const fatController = new FatController();
const deleteController = new DeleteControllerService();

//Create
fatRouter.post(
    '/create',
    celebrate({
        [Segments.BODY] : {
            usuario : Joi.string().required(),
            departamento : Joi.string().required(),
            cod_proj: Joi.number().precision(4).required(),
            atividade : Joi.string().required()
        }
    }),fatController.create);

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
}), deleteController.delete);

//Summary Objeto
fatRouter.get('/summary',fatController.execute);

//Return Por Index
fatRouter.get('/exibir/:cod_fat',
celebrate({
    [Segments.PARAMS]:{
        cod_fat: Joi.string().uuid().required(),}
    }),fatController.exibir);




export default fatRouter;
