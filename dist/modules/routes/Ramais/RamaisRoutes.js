"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RamaisControllers_1 = __importDefault(require("../../controllers/RamaisControllers/RamaisControllers"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const ramaisRouter = (0, express_1.Router)();
const ramaisController = new RamaisControllers_1.default();
//Create
ramaisRouter.post('/create', isAutenticacion_1.default, ramaisController.create);
//update
ramaisRouter.put('/update/:uuidramal', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidramal: celebrate_1.Joi.string().uuid().required(),
    }
}), ramaisController.update);
//Delete
ramaisRouter.delete('/delete/:uuidramal', isAutenticacion_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidramal: celebrate_1.Joi.string().uuid().required(),
    }
}), ramaisController.delete);
//Summary Objeto
ramaisRouter.get('/summary', isAutenticacion_1.default, ramaisController.read);
exports.default = ramaisRouter;
