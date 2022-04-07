import { Router } from 'express';

import UsersControllers from '../../controllers/UsuersControllers/UsersControllers';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const useRouter = Router()
const userControllers = new UsersControllers();

useRouter.use(isAutenticacion);

//Colocando Autenticação na rota
useRouter.post('/load',celebrate({
    [Segments.BODY]:{
        status:Joi.string().required(),
    }
}),userControllers.loading);


//No Create como obrigação tem que colocar os campos abaixo para a criação dos usuarios
useRouter.post('/create',celebrate({
        [Segments.BODY] :{
            login : Joi.string().required(),
            senha : Joi.string().required(),
            usuario: Joi.string().required(),
            email : Joi.string().required(),
            contato:Joi.string().required(),
            departamento:Joi.string().required(),
            cargo:Joi.string().required(),
    
        }
    }),userControllers.create); 


export default useRouter

