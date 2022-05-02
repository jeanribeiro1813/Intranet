"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersControllers_1 = __importDefault(require("../../controllers/UsersControllers/UsersControllers"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const useRouter = (0, express_1.Router)();
const userControllers = new UsersControllers_1.default();
useRouter.use(isAutenticacion_1.default);
useRouter.get('/index/:uuidusuario', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidusuario: celebrate_1.Joi.string().required(),
    }
}), userControllers.loading);
useRouter.post('/filter', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        status: celebrate_1.Joi.string().optional(),
        uuidusuario: celebrate_1.Joi.string().optional(),
        h_status: celebrate_1.Joi.string().optional(),
        uuiddeparta: celebrate_1.Joi.string().optional(),
        uuidcargo: celebrate_1.Joi.string().optional(),
    }
}), userControllers.filter);
//No Create como obrigação tem que colocar os campos abaixo para a criação dos usuarios
useRouter.post('/create', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        login: celebrate_1.Joi.string().required(),
        senha: celebrate_1.Joi.string().required(),
        usuario: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required(),
        contato: celebrate_1.Joi.string().required(),
        departamento: celebrate_1.Joi.string().required(),
        cargo: celebrate_1.Joi.string().required(),
    }
}), userControllers.create);
exports.default = useRouter;
