"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CargoController_1 = __importDefault(require("../../controllers/CargoController/CargoController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const cargoRouter = (0, express_1.Router)();
const cargoController = new CargoController_1.default();
//Create
cargoRouter.post('/create', isAutenticacion_1.default, cargoController.create);
//update
cargoRouter.put('/update/:uuidcargo', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidcargo: celebrate_1.Joi.string().uuid().required(),
    }
}), cargoController.update);
cargoRouter.get('/index/:uuidcargo', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidcargo: celebrate_1.Joi.string().uuid().required()
    }
}), isAutenticacion_1.default, cargoController.index);
//Delete
cargoRouter.delete('/delete/:uuidcargo', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidcargo: celebrate_1.Joi.string().uuid().required(),
    }
}), cargoController.delete);
//Summary Objeto
cargoRouter.get('/summary', cargoController.execute);
exports.default = cargoRouter;
