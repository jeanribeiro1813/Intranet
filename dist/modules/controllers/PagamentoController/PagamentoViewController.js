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
const LoadSummyService_1 = __importDefault(require("../../services/Pagamento/PagamentoView/LoadSummyService"));
const LoadFilterServices_1 = __importDefault(require("../../services/Pagamento/PagamentoView/LoadFilterServices"));
const LoadIndexService_1 = __importDefault(require("../../services/Pagamento/PagamentoView/LoadIndexService"));
class CargoController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadFuncao = new LoadSummyService_1.default();
            const funcao = yield loadFuncao.executeDes();
            return response.json(funcao.summary);
        });
    }
    filter(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidpagamento } = request.body;
            const loadFuncao = new LoadFilterServices_1.default();
            const funcao = yield loadFuncao.filter({ uuidpagamento });
            return response.json(funcao);
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidpagamento } = request.params;
            const loadFuncao = new LoadIndexService_1.default();
            const funcao = yield loadFuncao.index({ uuidpagamento });
            return response.json(funcao);
        });
    }
}
exports.default = CargoController;
