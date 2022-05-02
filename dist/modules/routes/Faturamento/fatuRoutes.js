"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FaturamentoController_1 = __importDefault(require("../../controllers/FaturamentoControllers/FaturamentoController"));
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const celebrate_1 = require("celebrate");
const fatRouter = (0, express_1.Router)();
const fatController = new FaturamentoController_1.default();
fatRouter.use(isAutenticacion_1.default);
//index
fatRouter.get('/index/:uuidfat', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidfat: celebrate_1.Joi.string().required(),
    }
}), fatController.loading);
//Create
fatRouter.post('/create', fatController.create);
//update
fatRouter.put('/update/:uuidfat', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidfat: celebrate_1.Joi.string().uuid().required(),
    }
}), fatController.update);
//Delete
fatRouter.delete('/delete/:uuidfat', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidfat: celebrate_1.Joi.string().uuid().required(),
    }
}), fatController.delete);
fatRouter.put('/updateStatus', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        uuidusuario: celebrate_1.Joi.string().required(),
        uuidprojeto: celebrate_1.Joi.string().required(),
        data: celebrate_1.Joi.string().required(),
        status: celebrate_1.Joi.string().required(),
    }
}), fatController.updateStatus);
exports.default = fatRouter;
