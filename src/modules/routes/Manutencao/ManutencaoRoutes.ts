import { Router } from 'express';

import ManutencaoController from '../../controllers/ManutencaoControllers/ManutencaoController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const manutencaoRouter = Router();

const manutencaoController = new ManutencaoController();

manutencaoRouter.use(isAutenticacion);

//Create
manutencaoRouter.post(
    '/create', 
    manutencaoController.create);

//update
manutencaoRouter.put('/update/:cod_manutencao_uuid'
,
celebrate({
    [Segments.PARAMS]:{
        cod_manutencao_uuid: Joi.string().uuid().required(),
    }
}),manutencaoController.update);


//Delete
manutencaoRouter.delete('/delete/:cod_manutencao_uuid',
celebrate({
    [Segments.PARAMS]:{
        cod_manutencao_uuid: Joi.string().uuid().required(),
    }
}), manutencaoController.delete);


//Summary Objeto
manutencaoRouter.get('/summary',manutencaoController.execute);



export default manutencaoRouter;
