import { Router } from 'express';

import Controllers from '../../controllers/UsersControllers/UsersViewControllers';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const router = Router()
const controllers = new Controllers();

router.use(isAutenticacion);

//Colocando Autenticação na rota
router.post('/filter',celebrate({
    [Segments.BODY]:{
        status:Joi.string().required(),
    }
}),controllers.filter);


export default router;
