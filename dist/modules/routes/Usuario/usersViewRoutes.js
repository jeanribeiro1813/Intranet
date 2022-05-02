"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersViewControllers_1 = __importDefault(require("../../controllers/UsersControllers/UsersViewControllers"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const router = (0, express_1.Router)();
const controllers = new UsersViewControllers_1.default();
router.use(isAutenticacion_1.default);
//Colocando Autenticação na rota
router.post('/filter', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        status: celebrate_1.Joi.string().required(),
    }
}), controllers.filter);
exports.default = router;
