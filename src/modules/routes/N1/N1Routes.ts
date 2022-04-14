import { Router } from 'express';

import Controller from '../../controllers/N1Controllers/N1Controller';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '@modules/services/middlewares/isAutenticacion';

const router = Router();

const controller = new Controller();

router.use(isAutenticacion);


//Create
router.post(
    '/create', 
    controller.create);

//Summary Objeto
router.get(
    '/summary',
    controller.read);

//update
router.put('/update/:uuidn1'
,
celebrate({
    [Segments.PARAMS]:{
        uuidn1: Joi.string().uuid().required(),
    }
}),controller.update);


//Delete
router.delete('/delete/:uuidn1',
celebrate({
    [Segments.PARAMS]:{
        uuidn1: Joi.string().uuid().required(),
    }
}), controller.delete);




export default router;
