import { Router } from 'express';

import ProjetoController from '../../controllers/ProjetosControllers/ProjectControllers';
import { celebrate,Joi,Segments } from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';


const projectRouter = Router();

const projetoController = new ProjetoController();

projectRouter.use(isAutenticacion);

//update
projectRouter.put('/update/:cod_proj_uuid',celebrate({
    [Segments.PARAMS]:{
        cod_proj_uuid:Joi.string().required()
    }
}),projetoController.update);


projectRouter.post(
    '/create', 
    projetoController.create);



export default projectRouter;
