"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PagamentoController_1 = __importDefault(require("../../controllers/PagamentoController/PagamentoController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const pagamentoRouter = (0, express_1.Router)();
const pagamentoController = new PagamentoController_1.default();
//Create
pagamentoRouter.post('/create', isAutenticacion_1.default, pagamentoController.create);
//update
pagamentoRouter.put('/update/:uuidpagamento', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidpagamento: celebrate_1.Joi.string().uuid().required(),
    }
}), pagamentoController.update);
//Delete
pagamentoRouter.delete('/delete/:uuidpagamento', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidpagamento: celebrate_1.Joi.string().uuid().required(),
    }
}), pagamentoController.delete);
exports.default = pagamentoRouter;
