import { Router } from 'express';

import UsuarioController from '../controllers/UsersController';

const usuarioRouter = Router();

const usuarioController = new UsuarioController();

//Pegando todos os usuarios
usuarioRouter.get('/index', usuarioController.usuario);
//Criando usuario , parte create
usuarioRouter.post('/create',usuarioController.saved);
//deletando usuario parte delete
usuarioRouter.delete('/delete:nombre',usuarioController.delete)
//Autenticação
usuarioRouter.post('/auth',usuarioController.autenticacao);




export default usuarioRouter;
