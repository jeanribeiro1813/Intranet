import { Router } from 'express';

import PagamentoViewController from '../../controllers/PagamentoController/PagamentoViewController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const pagamentoRouter = Router();

const pagamentoViewController = new PagamentoViewController();


pagamentoRouter.use(isAutenticacion);

//Summary Objeto
pagamentoRouter.get('/summary',pagamentoViewController.execute);

pagamentoRouter.get('/index/:uuidpagamento',celebrate({
    
    [Segments.PARAMS]:{

        uuidpagamento:Joi.string().uuid().required()
    }
}),pagamentoViewController.index);


pagamentoRouter.post('/filter',celebrate({
    
    [Segments.BODY]:{

        uuidpagamento:Joi.string().uuid().required()
    }
}),pagamentoViewController.filter);




export default pagamentoRouter;
