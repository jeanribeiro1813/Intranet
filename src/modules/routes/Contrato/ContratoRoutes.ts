import { Router } from 'express';

import ContratoController from '../../controllers/ContratoControllers/ContratoController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const contratoRouter = Router();

const contratoController = new ContratoController();


contratoRouter.use(isAutenticacion);

//Create
contratoRouter.post(
    '/create', 
    contratoController.create);

//update
contratoRouter.put('/update/:uuidcontrato'
,
celebrate({
    [Segments.PARAMS]:{
        uuidcontrato: Joi.string().uuid().required(),
    }
}),contratoController.update);


//Delete
contratoRouter.delete('/delete/:uuidcontrato',
celebrate({
    [Segments.PARAMS]:{
        uuidcontrato: Joi.string().uuid().required(),
    }
}), contratoController.delete);


//Summary Objeto
contratoRouter.get('/summary',contratoController.execute);



export default contratoRouter;
