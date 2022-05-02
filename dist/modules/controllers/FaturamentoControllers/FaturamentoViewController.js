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
const LoadSummyService_1 = __importDefault(require("../../services/Faturamento/FaturamentoView/LoadSummyService"));
const LoadPorUsuario_1 = __importDefault(require("../../services/Faturamento/FaturamentoView/LoadPorUsuario"));
const LoadIndexServices_1 = __importDefault(require("../../services/Faturamento/Faturamento/LoadIndexServices"));
class FaturamentoViewController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadFuncao = new LoadSummyService_1.default();
            const funcao = yield loadFuncao.executeDes();
            return response.json(funcao.summary);
        });
    }
    exibir(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidfat } = request.params;
            const indexFat = new LoadIndexServices_1.default();
            const showPerIndex = yield indexFat.load({ uuidfat });
            const result = {
                uuidfat: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.uuidfat,
                cliente: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.cliente,
                empresa: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.empresa,
                departamento: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.departamento,
                nprojeto: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.nprojeto,
                uuidprojeto: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.uuidprojeto,
                projeto: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.projeto,
                atividade: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.atividade,
                data: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.data,
                inicio: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.inicio,
                fim: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.fim,
                obs: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.obs,
                status: showPerIndex === null || showPerIndex === void 0 ? void 0 : showPerIndex.status
            };
            return response.json(showPerIndex);
        });
    }
    execuUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidusuario, data } = request.body;
            const indexFat = new LoadPorUsuario_1.default();
            const showPorIndex = yield indexFat.execute({ uuidusuario, data });
            return response.json(showPorIndex);
        });
    }
}
exports.default = FaturamentoViewController;
