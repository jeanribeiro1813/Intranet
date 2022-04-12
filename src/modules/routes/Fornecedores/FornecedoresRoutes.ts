import { Router } from 'express';

import FornecedoresController from '../../controllers/FornecedoresControllers/FornecedoresController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const fornecedoresRouter = Router();

const fornecedoresController = new FornecedoresController();



//Create
fornecedoresRouter.post(
    '/create',celebrate({
        [Segments.BODY]:{

            nome: Joi.string().required(),
            contato: Joi.string().required(),
            cargo: Joi.string().required()
            
        }
    }),isAutenticacion, 
    fornecedoresController.create);

//update
fornecedoresRouter.put('/update/:uuidfornece'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidfornece: Joi.string().uuid().required(),
    }
}),fornecedoresController.update);


//Delete
fornecedoresRouter.delete('/delete/:uuidfornece',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidfornece: Joi.string().uuid().required(),
    }
}), fornecedoresController.delete);


//Summary Objeto
fornecedoresRouter.get('/summary',isAutenticacion,fornecedoresController.execute);



export default fornecedoresRouter;
