import { Router } from 'express';

import ChamadosController from '../../controllers/ChamadosController/ChamadosController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const chamadosRouter = Router();

const chamadosController = new ChamadosController();

chamadosRouter.use(isAutenticacion);

//Create
chamadosRouter.post(
    '/create', 
    chamadosController.create);

//update
chamadosRouter.put('/update/:cod_chamado_uuid',
celebrate({
    [Segments.PARAMS]:{
        cod_chamado_uuid: Joi.string().uuid().required(),
    }
}),chamadosController.update);


//Delete
chamadosRouter.delete('/delete/:cod_chamado_uuid',
celebrate({
    [Segments.PARAMS]:{
        cod_chamado_uuid: Joi.string().uuid().required(),
    }
}), chamadosController.delete);


//Summary Objeto
chamadosRouter.get('/summary',chamadosController.execute);



export default chamadosRouter;
