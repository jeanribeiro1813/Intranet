import { Router } from 'express';

import ProjetoController from '../controllers/ProjetosControllers/ProjectControllers';

const projectRouter = Router();

const projetoController = new ProjetoController();

//Loading
projectRouter.get('/load',projetoController.loading);


//Summary Objeto
projectRouter.get('/summary',projetoController.execute);




export default projectRouter;
