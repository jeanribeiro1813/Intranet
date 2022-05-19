import { Router } from 'express';

import ClientesController from '../../controllers/ClientesController/ClientesController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const clientesRouter = Router();

const clientesController = new ClientesController();

clientesRouter.use(isAutenticacion);

//Create
clientesRouter.post(
    '/create', celebrate({
        [Segments.BODY]:{
            projeto:Joi.string().required(),
            cliente:Joi.string().required(),
        }
    }),
    clientesController.create);

//update
clientesRouter.put('/update/:uuidcliente'
,
celebrate({
    [Segments.PARAMS]:{
        uuidcliente: Joi.string().uuid().required(),
    }
}),clientesController.update);


//Delete
clientesRouter.delete('/delete/:uuidcliente',
celebrate({
    [Segments.PARAMS]:{
        uuidcliente: Joi.string().uuid().required(),
    }
}), clientesController.delete);


//Summary Objeto
clientesRouter.get('/summary',clientesController.execute);



export default clientesRouter;
