import { Router } from 'express';

import RamaisControllers from '../../controllers/RamaisControllers/RamaisControllers';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const ramaisRouter = Router();

const ramaisController = new RamaisControllers();



//Create
ramaisRouter.post(
    '/create',isAutenticacion, 
    ramaisController.create);

//update
ramaisRouter.put('/update/:uuidramal'
,isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidramal: Joi.string().uuid().required(),
    }
}),ramaisController.update);


//Delete
ramaisRouter.delete('/delete/:uuidramal',isAutenticacion,
celebrate({
    [Segments.PARAMS]:{
        uuidramal: Joi.string().uuid().required(),
    }
}), ramaisController.delete);


//Summary Objeto
ramaisRouter.get('/summary',isAutenticacion,ramaisController.read);



export default ramaisRouter;
