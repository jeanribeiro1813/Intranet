import { Router } from 'express';

import ProjetoController from '../../controllers/ProjetosControllers/ProjectControllers';
import { celebrate,Joi,Segments } from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';


const projectRouter = Router();

const projetoController = new ProjetoController();

//Loading
projectRouter.post('/load',isAutenticacion,celebrate({
    [Segments.BODY]:{
        status:Joi.string().required()
    }
}),projetoController.loading);


//Summary Objeto
projectRouter.get('/summary',isAutenticacion,projetoController.execute);

//update
projectRouter.put('/update/:cod_proj_uuid',isAutenticacion,celebrate({
    [Segments.PARAMS]:{
        cod_proj_uuid:Joi.string().required()
    }
}),projetoController.update);



projectRouter.post('/loadProj',isAutenticacion,celebrate({
    [Segments.BODY]:{
        contrato: Joi.string().required(),
        co:Joi.string().required(),
        status:Joi.string().required()

    }
}),projetoController.loadProjetos);



projectRouter.post(
    '/create',isAutenticacion, 
    projetoController.create);





export default projectRouter;
