"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfileController_1 = __importDefault(require("../../controllers/UsersControllers/ProfileController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const profileRouter = (0, express_1.Router)();
const profileControllers = new ProfileController_1.default();
profileRouter.use(isAutenticacion_1.default);
//Colocando Autenticação na rota
profileRouter.get('/show', profileControllers.show);
//No Create como obrigação tem que colocar os campos abaixo para a criação dos usuarios
profileRouter.put('/update', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        //Aqui coloquei a opção nome_usuario mais posso colocar login
        usuario: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required(),
        //Colocando a senha como opicional e assim colocando a senha sou obrigado a colocar o old_senha
        //E a senha de confirmacai
        senha: celebrate_1.Joi.string().optional(),
        old_senha: celebrate_1.Joi.string(),
        //Dando a condicão de que o valor do senha de confirmacao deve ser igual a senha
        // E o when faz o trabalho de se a SENHA estiver preenchida o SENHA DE CONFIRMACAO se torna obrigatorio
        senha_confirmacao: celebrate_1.Joi.string().valid(celebrate_1.Joi.ref('senha'))
            .when('senha', {
            is: celebrate_1.Joi.exist(),
            then: celebrate_1.Joi.required()
        }),
    },
}), profileControllers.update);
exports.default = profileRouter;
