import { Router } from 'express';

import UsersControllers from '../controllers/UsuersControllers/UsersControllers';
import {celebrate, Joi, Segments} from 'celebrate'

const useRouter = Router()
const userControllers = new UsersControllers();

useRouter.get('/load',userControllers.loading);

useRouter.post('/create',celebrate({
    [Segments.BODY] :{
        login : Joi.string().required(),
        senha : Joi.string().required(),
        nome_usuario: Joi.string().required(),
        email : Joi.string().required(),
        contato : Joi.string().required(),
        departamento:Joi.string().required(),
        cargo:Joi.string().required()

    }
}),userControllers.create,)


export default useRouter