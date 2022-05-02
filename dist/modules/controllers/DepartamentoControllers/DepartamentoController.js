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
const CreateDepartamentoServices_1 = __importDefault(require("../../services/Departamento/CreateDepartamentoServices"));
const UpdateDepartamentoServices_1 = __importDefault(require("../../services/Departamento/UpdateDepartamentoServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Departamento/LoadSummyService"));
const DeleteDepartamentoServices_1 = __importDefault(require("../../services/Departamento/DeleteDepartamentoServices"));
const LoadIndexDepartamentoServices_1 = __importDefault(require("../../services/Departamento/LoadIndexDepartamentoServices"));
class DepartamentoController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadFuncao = new LoadSummyService_1.default();
            const funcao = yield loadFuncao.executeDes();
            return response.json(funcao.summary);
        });
    }
    //Criação Departamento
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuiddeparta, departamento } = request.body;
            const service = new CreateDepartamentoServices_1.default();
            const result = yield service.execute({
                uuiddeparta, departamento
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
            const { uuiddeparta } = request.params;
            const { departamento } = request.body;
            const updateFatu = new UpdateDepartamentoServices_1.default();
            const fatura = yield updateFatu.update({
                uuiddeparta, departamento
            });
            return response.json(fatura);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuiddeparta } = request.params;
            const deleteDepartamento = new DeleteDepartamentoServices_1.default();
            deleteDepartamento.execute({ uuiddeparta });
            return response.json('Delete realizado com sucesso');
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuiddeparta } = request.params;
            const indexDepartamento = new LoadIndexDepartamentoServices_1.default();
            const result = yield indexDepartamento.index({ uuiddeparta });
            return response.json(result);
        });
    }
}
exports.default = DepartamentoController;
