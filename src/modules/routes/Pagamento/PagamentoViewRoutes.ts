import { Router } from 'express';

import PagamentoViewController from '../../controllers/PagamentoController/PagamentoViewController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const pagamentoRouter = Router();

const pagamentoViewController = new PagamentoViewController();


pagamentoRouter.use(isAutenticacion);

//Summary Objeto
pagamentoRouter.get('/summary',pagamentoViewController.execute);

pagamentoRouter.post('/filter',celebrate({
    
    [Segments.BODY]:{

        incidencia:Joi.string().required()
    }
}),pagamentoViewController.filter);




export default pagamentoRouter;
