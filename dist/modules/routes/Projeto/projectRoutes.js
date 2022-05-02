"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectControllers_1 = __importDefault(require("../../controllers/ProjetosControllers/ProjectControllers"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const projectRouter = (0, express_1.Router)();
const projetoController = new ProjectControllers_1.default();
projectRouter.use(isAutenticacion_1.default);
//update
projectRouter.put('/update/:cod_proj_uuid', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        cod_proj_uuid: celebrate_1.Joi.string().required()
    }
}), projetoController.update);
projectRouter.post('/create', projetoController.create);
exports.default = projectRouter;
