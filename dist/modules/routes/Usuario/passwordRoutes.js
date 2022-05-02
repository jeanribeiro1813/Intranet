"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ForgotPasswordController_1 = __importDefault(require("../../controllers/UsersControllers/ForgotPasswordController"));
const ResetPasswordController_1 = __importDefault(require("../../controllers/UsersControllers/ResetPasswordController"));
const celebrate_1 = require("celebrate");
const passwordRouter = (0, express_1.Router)();
const forgotPasswordControllers = new ForgotPasswordController_1.default();
const resetPasswordControllers = new ResetPasswordController_1.default();
passwordRouter.post('/forgot', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: {
        email: celebrate_1.Joi.string().required()
    }
}), forgotPasswordControllers.create);
passwordRouter.post('/reset', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: {
        token: celebrate_1.Joi.string().uuid().required(),
        senha: celebrate_1.Joi.string().required(),
        confirmar_senha: celebrate_1.Joi.string().required().valid(celebrate_1.Joi.ref('senha'))
    },
}), resetPasswordControllers.create);
exports.default = passwordRouter;
