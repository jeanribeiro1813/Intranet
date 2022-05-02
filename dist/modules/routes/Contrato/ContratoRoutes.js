"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContratoController_1 = __importDefault(require("../../controllers/ContratoControllers/ContratoController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const contratoRouter = (0, express_1.Router)();
const contratoController = new ContratoController_1.default();
contratoRouter.use(isAutenticacion_1.default);
//Create
contratoRouter.post('/create', contratoController.create);
//update
contratoRouter.put('/update/:uuidcontrato', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidcontrato: celebrate_1.Joi.string().uuid().required(),
    }
}), contratoController.update);
//Delete
contratoRouter.delete('/delete/:uuidcontrato', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidcontrato: celebrate_1.Joi.string().uuid().required(),
    }
}), contratoController.delete);
//Summary Objeto
contratoRouter.get('/summary', contratoController.execute);
exports.default = contratoRouter;
