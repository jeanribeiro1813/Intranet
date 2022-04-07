import { Router } from 'express';

import FaturamentoViewController from '../../controllers/FaturamentoControllers/FaturamentoViewController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const fatViewRouter = Router();

const fatViewController = new FaturamentoViewController();


fatViewRouter.use(isAutenticacion)


//Summary Objeto
fatViewRouter.get('/summary',fatViewController.execute);


//Return Por Index
fatViewRouter.get('/show/:codfat',
celebrate({
    [Segments.PARAMS]:{
        codfat: Joi.string().uuid().required(),}
    }),fatViewController.exibir);

//Return Por Usuario
fatViewRouter.post('/load',
celebrate({
    [Segments.BODY]:{
        uuidusuario: Joi.string().required(),
        data: Joi.string().required(),
    }
    }),fatViewController.execuUsers);



export default fatViewRouter;
