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

            usuario: Joi.string().required(),
            cpf_cnpj: Joi.string().required(),
            
        }
    }),isAutenticacion, 
    fornecedoresController.create);

//update
fornecedoresRouter.put('/update/:uuidusuario'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidusuario: Joi.string().uuid().required(),
    }
}),fornecedoresController.update);


//Delete
fornecedoresRouter.delete('/delete/:uuidusuario',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidusuario: Joi.string().uuid().required(),
    }
}), fornecedoresController.delete);


//Summary Objeto
fornecedoresRouter.get('/summary',isAutenticacion,fornecedoresController.execute);



export default fornecedoresRouter;
