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
const CreateAdvServices_1 = __importDefault(require("../../services/Adv/CreateAdvServices"));
const UpdateAdvServices_1 = __importDefault(require("../../services/Adv/UpdateAdvServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Adv/LoadSummyService"));
const DeleteAdvServices_1 = __importDefault(require("../..//services/Adv/DeleteAdvServices"));
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
            const { codadv, cod_page, desc_adv, cod_adv } = request.body;
            const service = new CreateAdvServices_1.default();
            const result = yield service.execute({
                codadv, cod_page, desc_adv, cod_adv
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
            const { codadv } = request.params;
            const { cod_page, desc_adv, cod_adv } = request.body;
            const updateFatu = new UpdateAdvServices_1.default();
            const fatura = yield updateFatu.update({
                codadv, cod_page, desc_adv, cod_adv
            });
            return response.json(fatura);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codadv } = request.params;
            const deleteAtividade = new DeleteAdvServices_1.default();
            deleteAtividade.execute({ codadv });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = AtividadeController;
