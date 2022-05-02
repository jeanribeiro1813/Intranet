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
const CreateChamadosServices_1 = __importDefault(require("../../services/Chamados/CreateChamadosServices"));
const UpdateChamadosServices_1 = __importDefault(require("../../services/Chamados/UpdateChamadosServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Chamados/LoadSummyService"));
const DeleteChamadosServices_1 = __importDefault(require("../../services/Chamados/DeleteChamadosServices"));
class ChamadosController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadFuncao = new LoadSummyService_1.default();
            const funcao = yield loadFuncao.executeDes();
            return response.json(funcao);
        });
    }
    //Criação Cargo
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_chamado_uuid, cod_usuario, equipamento, descricao, prioridade, dt_solicitacao, dt_conclusao, desc_conclusao, cod_chamado } = request.body;
            const service = new CreateChamadosServices_1.default();
            const result = yield service.execute({
                cod_chamado_uuid, cod_usuario, equipamento, descricao, prioridade,
                dt_solicitacao, dt_conclusao, desc_conclusao, cod_chamado
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
            const { cod_chamado_uuid } = request.params;
            const { cod_usuario, equipamento, descricao, prioridade, dt_solicitacao, dt_conclusao, desc_conclusao, cod_chamado } = request.body;
            const updateFatu = new UpdateChamadosServices_1.default();
            const fatura = yield updateFatu.update({
                cod_chamado_uuid, cod_usuario, equipamento, descricao, prioridade,
                dt_solicitacao, dt_conclusao, desc_conclusao, cod_chamado
            });
            return response.json(fatura);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_chamado_uuid } = request.params;
            const deleteCargo = new DeleteChamadosServices_1.default();
            deleteCargo.execute({ cod_chamado_uuid });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = ChamadosController;
