"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PagamentoViewController_1 = __importDefault(require("../../controllers/PagamentoController/PagamentoViewController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const pagamentoRouter = (0, express_1.Router)();
const pagamentoViewController = new PagamentoViewController_1.default();
pagamentoRouter.use(isAutenticacion_1.default);
//Summary Objeto
pagamentoRouter.get('/summary', pagamentoViewController.execute);
pagamentoRouter.get('/index/:uuidpagamento', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidpagamento: celebrate_1.Joi.string().uuid().required()
    }
}), pagamentoViewController.index);
pagamentoRouter.post('/filter', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        uuidpagamento: celebrate_1.Joi.string().uuid().required()
    }
}), pagamentoViewController.filter);
exports.default = pagamentoRouter;
