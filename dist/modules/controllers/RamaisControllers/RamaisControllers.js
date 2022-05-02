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
const CreateRamaisServices_1 = __importDefault(require("../../services/Ramais/CreateRamaisServices"));
const UpdateRamaisServices_1 = __importDefault(require("../../services/Ramais/UpdateRamaisServices"));
const DeleteRamaisServices_1 = __importDefault(require("../../services/Ramais/DeleteRamaisServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Ramais/LoadSummyService"));
class N3Controller {
    read(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new LoadSummyService_1.default();
            const funcao = yield services.executeDes();
            return response.json(funcao.summary);
        });
    }
    //Criação
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidramal, ramal, cod_atv } = request.body;
            const services = new CreateRamaisServices_1.default();
            const result = yield services.execute({
                uuidramal, ramal, cod_atv
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
            const { uuidramal } = request.params;
            const { ramal, cod_atv } = request.body;
            const services = new UpdateRamaisServices_1.default();
            const result = yield services.update({
                uuidramal, ramal, cod_atv
            });
            return response.json(result);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidramal } = request.params;
            const services = new DeleteRamaisServices_1.default();
            services.execute({ uuidramal });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = N3Controller;
