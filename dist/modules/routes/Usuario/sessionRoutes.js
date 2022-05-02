"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SessionControllers_1 = __importDefault(require("../../controllers/UsersControllers/SessionControllers"));
const celebrate_1 = require("celebrate");
const sessionRoutes = (0, express_1.Router)();
const sessionControllers = new SessionControllers_1.default();
sessionRoutes.post('/createSession', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: {
        login: celebrate_1.Joi.string().required(),
        senha: celebrate_1.Joi.string().required()
    }
}), sessionControllers.create);
exports.default = sessionRoutes;
