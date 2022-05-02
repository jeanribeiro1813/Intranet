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
const CreateAtividadeServices_1 = __importDefault(require("../../services/Atividade/CreateAtividadeServices"));
const UpdateAtividadeServices_1 = __importDefault(require("../../services/Atividade/UpdateAtividadeServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Atividade/LoadSummyService"));
const DeleteAtividadeServices_1 = __importDefault(require("../../services/Atividade/DeleteAtividadeServices"));
class AtividadeController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadFuncao = new LoadSummyService_1.default();
            const funcao = yield loadFuncao.executeDes();
            return response.json(funcao.summary);
        });
    }
    //Criação Atividade
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidatividade, atividade, cod_atv } = request.body;
            const service = new CreateAtividadeServices_1.default();
            const result = yield service.execute({
                uuidatividade, atividade, cod_atv
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
            const { uuidatividade } = request.params;
            const { atividade, cod_atv } = request.body;
            const updateFatu = new UpdateAtividadeServices_1.default();
            const fatura = yield updateFatu.update({
                uuidatividade, atividade, cod_atv
            });
            return response.json(fatura);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidatividade } = request.params;
            const deleteAtividade = new DeleteAtividadeServices_1.default();
            deleteAtividade.execute({ uuidatividade });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = AtividadeController;
