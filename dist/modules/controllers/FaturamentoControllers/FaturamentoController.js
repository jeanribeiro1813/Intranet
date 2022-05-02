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
const LoadIndexServices_1 = __importDefault(require("../../services/Faturamento/Faturamento/LoadIndexServices"));
const CreateFaturamentoServices_1 = __importDefault(require("../../services/Faturamento/Faturamento/CreateFaturamentoServices"));
const UpdateFaturamentoServices_1 = __importDefault(require("../../services/Faturamento/Faturamento/UpdateFaturamentoServices"));
const DeleteServices_1 = __importDefault(require("../../services/Faturamento/Faturamento/DeleteServices"));
const UpdateFaturamentoStatus_1 = __importDefault(require("../../services/Faturamento/Faturamento/UpdateFaturamentoStatus"));
class FaturamentoController {
    loading(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidfat } = request.params;
            const loadingService = new LoadIndexServices_1.default();
            const result = yield loadingService.load({ uuidfat });
            return response.json(result);
        });
    }
    //Criação Faturamento
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidfat, uuidusuario, uuidprojeto, uuidatividade, data, inicio, fim, status, obs, empresa } = request.body;
            const service = new CreateFaturamentoServices_1.default();
            const result = yield service.execute({
                uuidfat, uuidusuario, uuidprojeto, uuidatividade, data, inicio, fim, status, obs, empresa
            });
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.json('Criado com sucesso');
        });
    }
    // Upgrade
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidfat } = request.params;
            const { uuidusuario, uuidprojeto, uuidatividade, data, inicio, fim, status, obs, empresa } = request.body;
            const updateFatu = new UpdateFaturamentoServices_1.default();
            const fatura = yield updateFatu.update({
                uuidfat, uuidusuario, uuidprojeto, uuidatividade, data, inicio, fim, status, obs, empresa
            });
            return response.json('Atualizado com sucesso');
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidfat } = request.params;
            const deleteFaturamento = new DeleteServices_1.default();
            const deletePorIndex = deleteFaturamento.execute({ uuidfat });
            return response.json('Deletado com sucesso');
        });
    }
    updateStatus(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidusuario, uuidprojeto, data, status } = request.body;
            const indexFat = new UpdateFaturamentoStatus_1.default();
            const showPorIndex = yield indexFat.executeStatus({ uuidusuario, uuidprojeto, data, status });
            return response.json(showPorIndex);
        });
    }
}
exports.default = FaturamentoController;
