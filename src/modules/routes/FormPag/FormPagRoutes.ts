import { Router } from 'express';

import Controller from '../../controllers/FormPagControllers/FormPagController';
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
router.put('/update/:uuidformpag'
,
celebrate({
    [Segments.PARAMS]:{
        uuidformpag: Joi.string().uuid().required(),
    }
}),controller.update);


//Delete
router.delete('/delete/:uuidformpag',
celebrate({
    [Segments.PARAMS]:{
        uuidformpag: Joi.string().uuid().required(),
    }
}), controller.delete);




export default router;
