"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AtividadeController_1 = __importDefault(require("../../controllers/AtividadeControllers/AtividadeController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const atividadeRouter = (0, express_1.Router)();
const atividadeController = new AtividadeController_1.default();
//Create
atividadeRouter.post('/create', isAutenticacion_1.default, atividadeController.create);
//update
atividadeRouter.put('/update/:codativida', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        codativida: celebrate_1.Joi.string().uuid().required(),
    }
}), atividadeController.update);
//Delete
atividadeRouter.delete('/delete/:codativida', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        codativida: celebrate_1.Joi.string().uuid().required(),
    }
}), atividadeController.delete);
//Summary Objeto
atividadeRouter.get('/summary', isAutenticacion_1.default, atividadeController.execute);
exports.default = atividadeRouter;
