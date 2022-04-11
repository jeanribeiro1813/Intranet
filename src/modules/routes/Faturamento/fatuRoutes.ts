import { Router } from 'express';

import FatController from '../../controllers/FaturamentoControllers/FaturamentoController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const fatRouter = Router();

const fatController = new FatController();


fatRouter.use(isAutenticacion)

//Create
fatRouter.post( '/create',
    
    fatController.create);

//update
fatRouter.put('/update/:uuidfat'
,celebrate({
    [Segments.PARAMS]:{
        uuidfat: Joi.string().uuid().required(),
    }
}),fatController.update);


//Delete
fatRouter.delete('/delete/:uuidfat',
celebrate({
    [Segments.PARAMS]:{
        uuidfat: Joi.string().uuid().required(),
    }
}), fatController.delete);



fatRouter.put('/updateStatus',
 celebrate({
     [Segments.BODY]:{

         uuidusuario: Joi.string().required(),
         uuidprojeto:Joi.string().required(),
         uuidcontrato: Joi.string().required(),
         data:Joi.string().required(),
         status:Joi.string().required(),
        
     }
     }),
    fatController.updateStatus);





export default fatRouter;
