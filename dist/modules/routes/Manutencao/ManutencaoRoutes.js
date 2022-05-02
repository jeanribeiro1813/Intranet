"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ManutencaoController_1 = __importDefault(require("../../controllers/ManutencaoControllers/ManutencaoController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const manutencaoRouter = (0, express_1.Router)();
const manutencaoController = new ManutencaoController_1.default();
manutencaoRouter.use(isAutenticacion_1.default);
//Create
manutencaoRouter.post('/create', manutencaoController.create);
//update
manutencaoRouter.put('/update/:cod_manutencao_uuid', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        cod_manutencao_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), manutencaoController.update);
//Delete
manutencaoRouter.delete('/delete/:cod_manutencao_uuid', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        cod_manutencao_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), manutencaoController.delete);
//Summary Objeto
manutencaoRouter.get('/summary', manutencaoController.execute);
exports.default = manutencaoRouter;
