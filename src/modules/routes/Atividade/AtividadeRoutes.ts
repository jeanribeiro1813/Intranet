import { Router } from 'express';

import AtividadeController from '../../controllers/AtividadeControllers/AtividadeController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const atividadeRouter = Router();

const atividadeController = new AtividadeController();



//Create
atividadeRouter.post(
    '/create',isAutenticacion, 
    atividadeController.create);

//update
atividadeRouter.put('/update/:codativida'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        codativida: Joi.string().uuid().required(),
    }
}),atividadeController.update);


//Delete
atividadeRouter.delete('/delete/:codativida',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        codativida: Joi.string().uuid().required(),
    }
}), atividadeController.delete);


//Summary Objeto
atividadeRouter.get('/summary',isAutenticacion,atividadeController.execute);



export default atividadeRouter;
