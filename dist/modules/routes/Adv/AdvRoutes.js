"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdvController_1 = __importDefault(require("../../controllers/AdvControllers/AdvController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const advRouter = (0, express_1.Router)();
const advController = new AdvController_1.default();
advRouter.use(isAutenticacion_1.default);
//Create
advRouter.post('/create', advController.create);
//update
advRouter.put('/update/:codadv', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        codadv: celebrate_1.Joi.string().uuid().required(),
    }
}), advController.update);
//Delete
advRouter.delete('/delete/:codadv', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        codadv: celebrate_1.Joi.string().uuid().required(),
    }
}), advController.delete);
//Summary Objeto
advRouter.get('/summary', advController.execute);
exports.default = advRouter;
