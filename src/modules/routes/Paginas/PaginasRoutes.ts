import { Router } from 'express';

import PaginasControllers from '../../controllers/PaginasControllers/PaginasController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const paginasRouter = Router();

const paginasController = new PaginasControllers();

paginasRouter.use(isAutenticacion);

//Create
paginasRouter.post(
    '/create', 
    paginasController.create);

//update
paginasRouter.put('/update/:cod_page_uuid'
,
celebrate({
    [Segments.PARAMS]:{
        cod_page_uuid: Joi.string().uuid().required(),
    }
}),paginasController.update);


//Delete
paginasRouter.delete('/delete/:cod_page_uuid',
celebrate({
    [Segments.PARAMS]:{
        cod_page_uuid: Joi.string().uuid().required(),
    }
}), paginasController.delete);


//Summary Objeto
paginasRouter.get('/summary',paginasController.execute);



export default paginasRouter;
