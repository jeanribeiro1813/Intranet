import { Router } from 'express';
import Controller from '../../controllers/N3Controllers/N3Controller';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

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
router.put('/update/:uuidn3'
,
celebrate({
    [Segments.PARAMS]:{
        uuidn3: Joi.string().uuid().required(),
    }
}),controller.update);


//Delete
router.delete('/delete/:uuidn3',
celebrate({
    [Segments.PARAMS]:{
        uuidn3: Joi.string().uuid().required(),
    }
}), controller.delete);





export default router;
