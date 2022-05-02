"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FaturamentoViewController_1 = __importDefault(require("../../controllers/FaturamentoControllers/FaturamentoViewController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const fatViewRouter = (0, express_1.Router)();
const fatViewController = new FaturamentoViewController_1.default();
fatViewRouter.use(isAutenticacion_1.default);
//Summary Objeto
fatViewRouter.get('/summary', fatViewController.execute);
//Return Por Index
fatViewRouter.get('/index/:uuidfat', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidfat: celebrate_1.Joi.string().uuid().required(),
    }
}), fatViewController.exibir);
//Return Por Usuario
fatViewRouter.post('/load', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        uuidusuario: celebrate_1.Joi.string().required(),
        data: celebrate_1.Joi.string().required(),
    }
}), fatViewController.execuUsers);
exports.default = fatViewRouter;
