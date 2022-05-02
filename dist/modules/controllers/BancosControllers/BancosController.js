"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BancosServices_1 = __importDefault(require("../../services/Bancos/BancosServices"));
class N3Controller {
    read(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new BancosServices_1.default();
            const funcao = yield services.read();
            return response.json(funcao.summary);
        });
    }
    //Criação
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidbanco, codigo, descricao } = request.body;
            const services = new BancosServices_1.default();
            const result = yield services.create({
                uuidbanco, codigo, descricao
            });
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.json(result);
        });
    }
    // Upgrade
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidbanco } = request.params;
            const { codigo, descricao } = request.body;
            const services = new BancosServices_1.default();
            const result = yield services.update({
                uuidbanco, codigo, descricao
            });
            return response.json(result);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidbanco } = request.params;
            const services = new BancosServices_1.default();
            yield services.delete({ uuidbanco });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = N3Controller;
