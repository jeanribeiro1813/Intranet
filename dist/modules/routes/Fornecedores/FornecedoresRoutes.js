"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FornecedoresController_1 = __importDefault(require("../../controllers/FornecedoresControllers/FornecedoresController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const fornecedoresRouter = (0, express_1.Router)();
const fornecedoresController = new FornecedoresController_1.default();
//Create
fornecedoresRouter.post('/create', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        usuario: celebrate_1.Joi.string().required(),
        cpf_cnpj: celebrate_1.Joi.string().required(),
    }
}), isAutenticacion_1.default, fornecedoresController.create);
//update
fornecedoresRouter.put('/update/:uuidusuario', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidusuario: celebrate_1.Joi.string().uuid().required(),
    }
}), fornecedoresController.update);
//Delete
fornecedoresRouter.delete('/delete/:uuidusuario', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidusuario: celebrate_1.Joi.string().uuid().required(),
    }
}), fornecedoresController.delete);
//Summary Objeto
fornecedoresRouter.get('/summary', isAutenticacion_1.default, fornecedoresController.execute);
exports.default = fornecedoresRouter;
