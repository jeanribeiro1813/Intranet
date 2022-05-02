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
const CreateFornecedoresServices_1 = __importDefault(require("../../services/Fornecedores/CreateFornecedoresServices"));
const UpdateFornecedoresServices_1 = __importDefault(require("../../services/Fornecedores/UpdateFornecedoresServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Fornecedores/LoadSummyService"));
const DeleteFornecedoresServices_1 = __importDefault(require("../../services/Fornecedores/DeleteFornecedoresServices"));
class FornecedoresController {
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
            const { uuidusuario, usuario, tp_doc, cpf_cnpj, email, contato, contato2, cargo, status, avatar } = request.body;
            const service = new CreateFornecedoresServices_1.default();
            const result = yield service.execute({
                uuidusuario, usuario, tp_doc, cpf_cnpj, email, contato, contato2, cargo, status, avatar
            });
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.json('Criação Realizada com sucesso');
        });
    }
    // Upgrade
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidusuario } = request.params;
            const { usuario, tp_doc, cpf_cnpj, email, contato, contato2, cargo, status, avatar } = request.body;
            const updateForne = new UpdateFornecedoresServices_1.default();
            const fornecedor = yield updateForne.update({
                uuidusuario, usuario, tp_doc, cpf_cnpj, email, contato, contato2, cargo, status, avatar
            });
            return response.json('Atualização realizada com sucesso');
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidusuario } = request.params;
            const deleteFornecedores = new DeleteFornecedoresServices_1.default();
            deleteFornecedores.execute({ uuidusuario });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = FornecedoresController;
