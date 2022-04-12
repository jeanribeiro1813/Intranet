import { Router } from 'express';

import ProjectViewControllers from '../../controllers/ProjetosControllers/ProjectViewControllers';
import { celebrate,Joi,Segments } from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';


const projectRouter = Router();

const projetoViewController = new ProjectViewControllers();

projectRouter.use(isAutenticacion);


//Summary Objeto
projectRouter.get('/summary',projetoViewController.execute);


projectRouter.post('/loadProj',celebrate({
    [Segments.BODY]:{
        nprojeto: Joi.string().optional(),
        contrato:Joi.string().optional(),
        status:Joi.string().optional()
    }
}),projetoViewController.loadProjects);




export default projectRouter;
