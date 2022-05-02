import { Router } from 'express';

import ForgotPasswordController from '../../controllers/UsersControllers/ForgotPasswordController';
import ResetPasswordController from '../../controllers/UsersControllers/ResetPasswordController';
import {celebrate, Joi, Segments} from 'celebrate';

const passwordRouter = Router();
const forgotPasswordControllers = new ForgotPasswordController();
const resetPasswordControllers = new ResetPasswordController();


passwordRouter.post('/forgot',

celebrate({[Segments.BODY] :{
    email : Joi.string().required()
}
}),forgotPasswordControllers.create);


passwordRouter.post('/reset',

celebrate({[Segments.BODY] :{
    token : Joi.string().uuid().required(),
    senha : Joi.string().required(),
    confirmar_senha : Joi.string().required().valid(Joi.ref('senha'))
},
}),resetPasswordControllers.create);




export default passwordRouter;