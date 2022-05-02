"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarrosController_1 = __importDefault(require("../../controllers/CarrosController/CarrosController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const carrosRouter = (0, express_1.Router)();
const carrosController = new CarrosController_1.default();
//Create
carrosRouter.post('/create', isAutenticacion_1.default, carrosController.create);
//update
carrosRouter.put('/update/:id_uuid', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), carrosController.update);
//Delete
carrosRouter.delete('/delete/:id_uuid', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), carrosController.delete);
//Summary Objeto
carrosRouter.get('/summary', isAutenticacion_1.default, carrosController.execute);
exports.default = carrosRouter;
