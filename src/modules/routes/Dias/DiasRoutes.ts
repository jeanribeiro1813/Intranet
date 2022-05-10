import { Router } from 'express';

import DiasController from '../../controllers/DiasControllers/DiasController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const diasRouter = Router();

const diasController = new DiasController();

diasRouter.use(isAutenticacion);

//Create
diasRouter.post(
    '/create', 
    diasController.create);

//update
diasRouter.put('/update/:uuiddiasuteis'
,
celebrate({
    [Segments.PARAMS]:{
        uuiddiasuteis: Joi.string().uuid().required(),
    }
}),diasController.update);


//Delete
diasRouter.delete('/delete/:uuiddiasuteis',
celebrate({
    [Segments.PARAMS]:{
        uuiddiasuteis: Joi.string().uuid().required(),
    }
}), diasController.delete);


//Summary Objeto
diasRouter.get('/summary',diasController.summary);

//Filter
diasRouter.post('/filter',celebrate({
    [Segments.BODY]:{
        ano:Joi.string().required(),
        codigo:Joi.string().optional(),
    }
}),diasController.filter);

//Index
diasRouter.get('/index/:uuiddiasuteis',
celebrate({
    [Segments.PARAMS]:{
        uuiddiasuteis: Joi.string().uuid().required(),}
    }),diasController.index);



export default diasRouter;
