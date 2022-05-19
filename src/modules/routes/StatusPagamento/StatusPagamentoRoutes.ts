import { Router } from 'express';

import StatusController from '../../controllers/StatusPagamentoController/StatusController';
import isAutenticacion from '../../services/middlewares/isAutenticacion';
import {celebrate, Joi, Segments} from 'celebrate';


const statusRouter = Router();

const statusController = new StatusController();

statusRouter.use(isAutenticacion);

//Summary Objeto
statusRouter.get('/summary',statusController.summary);

statusRouter.post('/filter',celebrate({
    [Segments.BODY]:{
        
        visivel:Joi.string().required()
    }
}),statusController.filter);

statusRouter.post('/create',statusController.create);

export default statusRouter;
