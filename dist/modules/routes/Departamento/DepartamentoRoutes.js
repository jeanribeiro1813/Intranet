"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DepartamentoController_1 = __importDefault(require("../../controllers/DepartamentoControllers/DepartamentoController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const departamentoRouter = (0, express_1.Router)();
const departamentoController = new DepartamentoController_1.default();
// departamentoRouter.use(isAutenticacion);
//Create
departamentoRouter.post('/create', isAutenticacion_1.default, departamentoController.create);
departamentoRouter.get('/index/:uuiddeparta', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuiddeparta: celebrate_1.Joi.string().uuid().required()
    }
}), isAutenticacion_1.default, departamentoController.index);
//update
departamentoRouter.put('/update/:uuiddeparta', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuiddeparta: celebrate_1.Joi.string().uuid().required(),
    }
}), departamentoController.update);
//Delete
departamentoRouter.delete('/delete/:uuiddeparta', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuiddeparta: celebrate_1.Joi.string().uuid().required(),
    }
}), departamentoController.delete);
//Summary Objeto
departamentoRouter.get('/summary', departamentoController.execute);
exports.default = departamentoRouter;
