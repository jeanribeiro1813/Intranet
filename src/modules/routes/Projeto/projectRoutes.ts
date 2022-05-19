import { Router } from 'express';

import ProjetoController from '../../controllers/ProjetosControllers/ProjectControllers';
import { celebrate,Joi,Segments } from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';


const projectRouter = Router();

const projetoController = new ProjetoController();

projectRouter.use(isAutenticacion);

//update
projectRouter.put('/update/:uuidprojeto',celebrate({
    [Segments.PARAMS]:{
        uuidprojeto:Joi.string().required()
    }
}),projetoController.update);


projectRouter.post(
    '/create', 
    projetoController.create);


projectRouter.get('/index/:uuidprojeto',celebrate({

    [Segments.PARAMS]:{
        
        uuidprojeto: Joi.string().uuid().required(),
        
    }
}),projetoController.index);

export default projectRouter;
