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
const CreatePaginasServices_1 = __importDefault(require("../../services/Paginas/CreatePaginasServices"));
const UpdatePaginasServices_1 = __importDefault(require("../../services/Paginas/UpdatePaginasServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Paginas/LoadSummyService"));
const DeletePaginasServices_1 = __importDefault(require("../../services/Paginas/DeletePaginasServices"));
class PaginasController {
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
            const { cod_page_uuid, pagina, descricao, banner, cod_page } = request.body;
            const service = new CreatePaginasServices_1.default();
            const result = yield service.execute({
                cod_page_uuid, pagina, descricao, banner, cod_page
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
            const { cod_page_uuid } = request.params;
            const { pagina, descricao, banner, cod_page } = request.body;
            const updateFatu = new UpdatePaginasServices_1.default();
            const fatura = yield updateFatu.update({
                cod_page_uuid, pagina, descricao, banner, cod_page
            });
            return response.json(fatura);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_page_uuid } = request.params;
            const deleteAtividade = new DeletePaginasServices_1.default();
            deleteAtividade.execute({ cod_page_uuid });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = PaginasController;
