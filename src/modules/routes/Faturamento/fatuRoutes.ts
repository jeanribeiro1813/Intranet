import { Router } from 'express';

import FatController from '../../controllers/FaturamentoControllers/FaturamentoController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const fatRouter = Router();

const fatController = new FatController();


fatRouter.use(isAutenticacion)

//Create
fatRouter.post(
    '/create', 
    fatController.create);

//update
fatRouter.put('/update/:codfat'
,celebrate({
    [Segments.PARAMS]:{
        codfat: Joi.string().uuid().required(),
    }
}),fatController.update);


//Delete
fatRouter.delete('/delete/:codfat',
celebrate({
    [Segments.PARAMS]:{
        codfat: Joi.string().uuid().required(),
    }
}), fatController.delete);



fatRouter.post('/update',
celebrate({
    [Segments.BODY]:{

        codusuario: Joi.string().required(),
        coddeparta:Joi.string().required(),
        codprojeto:Joi.string().required(),
        contrato: Joi.string().required(),
        data:Joi.string().required(),
        status:Joi.string().required(),
        
    }
    }),fatController.updateStatus);





export default fatRouter;
