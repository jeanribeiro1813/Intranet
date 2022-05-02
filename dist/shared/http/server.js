"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../../modules/routes"));
const AppErrors_1 = __importDefault(require("../errors/AppErrors"));
const celebrate_1 = require("celebrate");
require("../database");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((0, celebrate_1.errors)());
app.use((error, request, response, next) => {
    console.log(error);
    if (error instanceof AppErrors_1.default) {
        return response.status(error.statusCode).json({
            status: 'Error',
            message: error.message
        });
    }
    return response.status(500).json({
        status: 'Error Server',
        message: 'Erro no servidor Interno'
    });
});
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
