"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PaginasController_1 = __importDefault(require("../../controllers/PaginasControllers/PaginasController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const paginasRouter = (0, express_1.Router)();
const paginasController = new PaginasController_1.default();
paginasRouter.use(isAutenticacion_1.default);
//Create
paginasRouter.post('/create', paginasController.create);
//update
paginasRouter.put('/update/:cod_page_uuid', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        cod_page_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), paginasController.update);
//Delete
paginasRouter.delete('/delete/:cod_page_uuid', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        cod_page_uuid: celebrate_1.Joi.string().uuid().required(),
    }
}), paginasController.delete);
//Summary Objeto
paginasRouter.get('/summary', paginasController.execute);
exports.default = paginasRouter;
