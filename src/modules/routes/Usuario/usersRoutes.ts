import { Router } from 'express';

import UsersControllers from '../../controllers/UsersControllers/UsersControllers';
import {celebrate, Joi, Segments} from 'celebrate';
import isAutenticacion from '../../services/middlewares/isAutenticacion';
import { string } from 'joi';

const useRouter = Router()
const userControllers = new UsersControllers();

useRouter.use(isAutenticacion);


useRouter.get('/index/:uuidusuario',celebrate({

    [Segments.PARAMS]:{

        uuidusuario:Joi.string().required(),
    }
}),userControllers.loading);

useRouter.put('/update/:uuidusuario',userControllers.update);


useRouter.post('/filter'
,celebrate({

    [Segments.BODY]:{

        status:Joi.string().optional(),
        uuidusuario:Joi.string().optional(),
        h_status:Joi.string().optional(),
        uuiddeparta:Joi.string().optional(),
        uuidcargo:Joi.string().optional(),

    }
}
),userControllers.filter);



//No Create como obrigação tem que colocar os campos abaixo para a criação dos usuarios
useRouter.post('/create',celebrate({
        [Segments.BODY] :{
            uuiddeparta : Joi.string().required(),
            uuidcargo : Joi.string().required(),
            usuario: Joi.string().required(),
            email : Joi.string().required(),
            dt_nasc:Joi.string().required(),
            ramal:Joi.number().optional(),
            contato:Joi.string().required(),
            contato2:Joi.string().optional(),
            cpf_cnpj:Joi.string().required(),
            n_cnh:Joi.number().optional(),
            dt_validade:Joi.string().optional(),
            enquadramento:Joi.string().required(),
            banco:Joi.number().optional(),
            carga_horaria:Joi.number().required(), 
            proventos:Joi.string().required(), 
            va_vr:Joi.number().optional(), 
            vt:Joi.number().optional(), 
            seguro:Joi.number().optional(), 
            cv_medico:Joi.string().optional(), 
            login:Joi.string().required(), 
            senha:Joi.string().required(), 
            status:Joi.string().optional(), 



    
        }
    }),userControllers.create); 


export default useRouter

