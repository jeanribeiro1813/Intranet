import { Router } from 'express';

import UsersControllers from '../../controllers/UsuersControllers/UsersControllers';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const useRouter = Router()
const userControllers = new UsersControllers();

//Colocando Autenticação na rota
useRouter.get('/load',isAutenticacion,userControllers.loading);


//No Create como obrigação tem que colocar os campos abaixo para a criação dos usuarios
useRouter.post('/create',celebrate({
        [Segments.BODY] :{
            login : Joi.string().required(),
            senha : Joi.string().required(),
            nome_usuario: Joi.string().required(),
            email : Joi.string().required(),
            contato:Joi.string().required(),
            departamento:Joi.string().required(),
            cargo:Joi.string().required(),
    
        }
    }),userControllers.create); 


export default useRouter

