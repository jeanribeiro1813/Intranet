import { Router } from 'express';

import ProjetoController from '../../controllers/ProjetosControllers/ProjectControllers';
import { celebrate,Joi,Segments } from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';


const projectRouter = Router();

const projetoController = new ProjetoController();

// projectRouter.use(isAutenticacion);

//Loading
projectRouter.post('/load',celebrate({
    [Segments.BODY]:{
        status:Joi.string().required()
    }
}),projetoController.loading);


//Summary Objeto
projectRouter.get('/summary',projetoController.execute);

//update
projectRouter.put('/update/:cod_proj_uuid',celebrate({
    [Segments.PARAMS]:{
        cod_proj_uuid:Joi.string().required()
    }
}),projetoController.update);



projectRouter.post('/loadProj',celebrate({
    [Segments.BODY]:{
        nprojeto: Joi.string().required(),
        contrato:Joi.string().required()

    }
}),projetoController.loadProjeto);



projectRouter.post(
    '/create', 
    projetoController.create);





export default projectRouter;
