import { Router } from 'express';

import SessionControllers from '../../controllers/UsersControllers/SessionControllers';
import {celebrate, Joi, Segments} from 'celebrate';

const sessionRoutes = Router()
const sessionControllers = new SessionControllers();

sessionRoutes.post('/createSession',

celebrate({[Segments.BODY] :{
    login : Joi.string().required(),
    senha : Joi.string().required()
}
}),sessionControllers.create);


export default sessionRoutes;