"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FormPagController_1 = __importDefault(require("../../controllers/FormPagControllers/FormPagController"));
const celebrate_1 = require("celebrate");
const isAutenticacion_1 = __importDefault(require("../../services/middlewares/isAutenticacion"));
const router = (0, express_1.Router)();
const controller = new FormPagController_1.default();
router.use(isAutenticacion_1.default);
//Create
router.post('/create', controller.create);
//Summary Objeto
router.get('/summary', controller.read);
//update
router.put('/update/:uuidformpag', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidformpag: celebrate_1.Joi.string().uuid().required(),
    }
}), controller.update);
//Delete
router.delete('/delete/:uuidformpag', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        uuidformpag: celebrate_1.Joi.string().uuid().required(),
    }
}), controller.delete);
exports.default = router;
