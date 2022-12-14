import { Router } from 'express';

import FatController from '../../controllers/FaturamentoControllers/FaturamentoController';
import isAutenticacion from '../../services/middlewares/isAutenticacion';
import {celebrate, Joi, Segments} from 'celebrate';


const fatRouter = Router();

const fatController = new FatController();


fatRouter.use(isAutenticacion);

//index
fatRouter.get('/index/:uuidfat',celebrate({

    [Segments.PARAMS]:{

        uuidfat:Joi.string().required(),
    }
}),fatController.loading);

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
         data:Joi.string().required(),
         sttpguuid:Joi.string().required(),
        
     }
     }),
    fatController.updateStatus);





export default fatRouter;
