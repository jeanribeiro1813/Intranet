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
const CreateManuntencoesServices_1 = __importDefault(require("../../services/Manuntencoes/CreateManuntencoesServices"));
const UpdateManuntencoesServices_1 = __importDefault(require("../../services/Manuntencoes/UpdateManuntencoesServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Manuntencoes/LoadSummyService"));
const DeleteManuntencoesServices_1 = __importDefault(require("../../services/Manuntencoes/DeleteManuntencoesServices"));
class ManutencaoController {
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
            const { cod_manutencao_uuid, descricao, valor, cod_manutencao } = request.body;
            const service = new CreateManuntencoesServices_1.default();
            const result = yield service.execute({
                cod_manutencao_uuid, descricao, valor, cod_manutencao
            });
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.json('Manutenção criado com sucesso');
        });
    }
    // Upgrade
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_manutencao_uuid } = request.params;
            const { descricao, valor, cod_manutencao } = request.body;
            const updateFatu = new UpdateManuntencoesServices_1.default();
            const fatura = yield updateFatu.update({
                cod_manutencao_uuid, descricao, valor, cod_manutencao
            });
            return response.json(fatura);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_manutencao_uuid } = request.params;
            const deleteAtividade = new DeleteManuntencoesServices_1.default();
            deleteAtividade.execute({ cod_manutencao_uuid });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = ManutencaoController;
