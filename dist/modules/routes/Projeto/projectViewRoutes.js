"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectViewControllers_1 = __importDefault(require("../../controllers/ProjetosControllers/ProjectViewControllers"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const projectRouter = (0, express_1.Router)();
const projetoViewController = new ProjectViewControllers_1.default();
projectRouter.use(isAutenticacion_1.default);
//Summary Objeto
projectRouter.get('/summary', projetoViewController.execute);
projectRouter.post('/filter', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        nprojeto: celebrate_1.Joi.string().optional(),
        contrato: celebrate_1.Joi.string().optional(),
        status: celebrate_1.Joi.string().optional()
    }
}), projetoViewController.loadProjects);
projectRouter.get('/index/:uuidprojeto', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidprojeto: celebrate_1.Joi.string().uuid().required(),
    }
}), projetoViewController.index);
exports.default = projectRouter;
