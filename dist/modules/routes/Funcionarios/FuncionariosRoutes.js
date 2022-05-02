"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FuncionariosController_1 = __importDefault(require("../../controllers/FuncionariosControllers/FuncionariosController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const funcionariosRouter = (0, express_1.Router)();
const funcionariosController = new FuncionariosController_1.default();
funcionariosRouter.use(isAutenticacion_1.default);
//Create
funcionariosRouter.post('/create', funcionariosController.create);
//update
funcionariosRouter.put('/update/:cod_func_uuid', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        cod_func_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), funcionariosController.update);
//Delete
funcionariosRouter.delete('/delete/:cod_func_uuid', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        cod_func_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), funcionariosController.delete);
//Summary Objeto
funcionariosRouter.get('/summary', funcionariosController.execute);
exports.default = funcionariosRouter;
