import { Router } from 'express';

import PagamentoController from '../../controllers/PagamentoController/PagamentoController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const pagamentoRouter = Router();

const pagamentoController = new PagamentoController();



//Create
pagamentoRouter.post(
    '/create',isAutenticacion, 
    pagamentoController.create);

//update
pagamentoRouter.put('/update/:uuidpagamento'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidpagamento: Joi.string().uuid().required(),
    }
}),pagamentoController.update);


//Delete
pagamentoRouter.delete('/delete/:uuidpagamento',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidpagamento: Joi.string().uuid().required(),
    }
}), pagamentoController.delete);

pagamentoRouter.get('/index/:uuidpagamento',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidpagamento: Joi.string().uuid().required(),
    }
}), pagamentoController.index);



export default pagamentoRouter;
