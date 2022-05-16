import { Router } from 'express';

import ProjectViewControllers from '../../controllers/ProjetosControllers/ProjectViewControllers';
import { celebrate,Joi,Segments } from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';
import Contrato from '../../../shared/infra/typeorm/entities/Contrato';


const projectRouter = Router();

const projetoViewController = new ProjectViewControllers();

projectRouter.use(isAutenticacion);


//Summary Objeto
projectRouter.get('/summary',projetoViewController.execute);



projectRouter.post('/filter',celebrate({

    [Segments.BODY]:{
        
        departamento:Joi.string().optional(),
        status:Joi.string().optional(),
        nprojeto:Joi.string().optional(),
        contrato:Joi.string().optional()


    }
}),projetoViewController.loadProjects);




export default projectRouter;
