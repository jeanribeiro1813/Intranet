"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ChamadosController_1 = __importDefault(require("../../controllers/ChamadosController/ChamadosController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const chamadosRouter = (0, express_1.Router)();
const chamadosController = new ChamadosController_1.default();
chamadosRouter.use(isAutenticacion_1.default);
//Create
chamadosRouter.post('/create', chamadosController.create);
//update
chamadosRouter.put('/update/:cod_chamado_uuid', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        cod_chamado_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), chamadosController.update);
//Delete
chamadosRouter.delete('/delete/:cod_chamado_uuid', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        cod_chamado_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), chamadosController.delete);
//Summary Objeto
chamadosRouter.get('/summary', chamadosController.execute);
exports.default = chamadosRouter;
