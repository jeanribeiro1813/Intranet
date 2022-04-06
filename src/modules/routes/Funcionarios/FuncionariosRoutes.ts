import { Router } from 'express';

import FuncionariosController from '../../controllers/FuncionariosControllers/FuncionariosController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const funcionariosRouter = Router();

const funcionariosController = new FuncionariosController();

funcionariosRouter.use(isAutenticacion);

//Create
funcionariosRouter.post(
    '/create',
    funcionariosController.create);

//update
funcionariosRouter.put('/update/:cod_func_uuid'
,
celebrate({
    [Segments.PARAMS]:{
        cod_func_uuid: Joi.string().uuid().required(),
    }
}),funcionariosController.update);


//Delete
funcionariosRouter.delete('/delete/:cod_func_uuid',
celebrate({
    [Segments.PARAMS]:{
        cod_func_uuid: Joi.string().uuid().required(),
    }
}), funcionariosController.delete);


//Summary Objeto
funcionariosRouter.get('/summary',funcionariosController.execute);



export default funcionariosRouter;
