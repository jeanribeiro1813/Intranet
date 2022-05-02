"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientesController_1 = __importDefault(require("../../controllers/ClientesController/ClientesController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const clientesRouter = (0, express_1.Router)();
const clientesController = new ClientesController_1.default();
clientesRouter.use(isAutenticacion_1.default);
//Create
clientesRouter.post('/create', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        projeto: celebrate_1.Joi.string().required(),
        cliente: celebrate_1.Joi.string().required(),
    }
}), clientesController.create);
//update
clientesRouter.put('/update/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().uuid().required(),
    }
}), clientesController.update);
//Delete
clientesRouter.delete('/delete/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), clientesController.delete);
//Summary Objeto
clientesRouter.get('/summary', clientesController.execute);
exports.default = clientesRouter;
