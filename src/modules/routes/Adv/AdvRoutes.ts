import { Router } from 'express';

import AdvController from '../../controllers/AdvControllers/AdvController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const advRouter = Router();

const advController = new AdvController();

advRouter.use(isAutenticacion);

//Create
advRouter.post(
    '/create', 
    advController.create);

//update
advRouter.put('/update/:codadv'
,
celebrate({
    [Segments.PARAMS]:{
        codadv: Joi.string().uuid().required(),
    }
}),advController.update);


//Delete
advRouter.delete('/delete/:codadv',
celebrate({
    [Segments.PARAMS]:{
        codadv: Joi.string().uuid().required(),
    }
}), advController.delete);


//Summary Objeto
advRouter.get('/summary',advController.execute);



export default advRouter;
