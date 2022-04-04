import { Router } from 'express';

import  ProfileController from '../../controllers/UsuersControllers/ProfileController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';

const profileRouter = Router()
const profileControllers = new ProfileController();


profileRouter.use(isAutenticacion);

//Colocando Autenticação na rota
profileRouter.get('/show',profileControllers.show);


//No Create como obrigação tem que colocar os campos abaixo para a criação dos usuarios
profileRouter.put('/updateProfile',celebrate({
        [Segments.BODY] :{
           
            //Aqui coloquei a opção nome_usuario mais posso colocar login
            nome_usuario: Joi.string().required(),
            email : Joi.string().required(),

            //Colocando a senha como opicional e assim colocando a senha sou obrigado a colocar o old_senha
            //E a senha de confirmacai
            senha : Joi.string().optional(),
            old_senha: Joi.string(),
            
            //Dando a condicão de que o valor do senha de confirmacao deve ser igual a senha
            // E o when faz o trabalho de se a SENHA estiver preenchida o SENHA DE CONFIRMACAO se torna obrigatorio
            senha_confirmacao : Joi.string().valid(Joi.ref('senha'))
            .when('senha',{
                is:Joi.exist(),
                then:Joi.required()
            }),
    
        },
    }),profileControllers.update); 


export default profileRouter

