import { Router } from 'express';

import ProjectViewControllers from '../../controllers/ProjetosControllers/ProjectViewControllers';
import { celebrate,Joi,Segments } from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';


const projectRouter = Router();

const projetoViewController = new ProjectViewControllers();

projectRouter.use(isAutenticacion);


//Summary Objeto
projectRouter.get('/summary',projetoViewController.execute);



projectRouter.post('/filter',celebrate({

    [Segments.BODY]:{
        nprojeto: Joi.string().optional(),
        contrato:Joi.string().optional(),
        status:Joi.string().optional()
    }
}),projetoViewController.loadProjects);


projectRouter.get('/index/:uuidprojeto',celebrate({
    
    [Segments.PARAMS]:{
        
        uuidprojeto: Joi.string().uuid().required(),
      
    }
}),projetoViewController.index);



export default projectRouter;
