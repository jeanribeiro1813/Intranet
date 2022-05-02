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
const typeorm_1 = require("typeorm");
const FaturamentoViewsRepository_1 = __importDefault(require("../../../../modules/typeorm/repositories/FaturamentoViewsRepository"));
class LoadFatSummaryService {
    executeDes() {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosrRepository = (0, typeorm_1.getCustomRepository)(FaturamentoViewsRepository_1.default);
            const user = yield projetosrRepository.find({});
            const summary = user.map((use) => {
                const DescItemOfSummary = {
                    uuidfat: use === null || use === void 0 ? void 0 : use.uuidfat,
                    cliente: use === null || use === void 0 ? void 0 : use.cliente,
                    empresa: use === null || use === void 0 ? void 0 : use.empresa,
                    departamento: use === null || use === void 0 ? void 0 : use.departamento,
                    nprojeto: use === null || use === void 0 ? void 0 : use.nprojeto,
                    uuidprojeto: use === null || use === void 0 ? void 0 : use.uuidprojeto,
                    projeto: use === null || use === void 0 ? void 0 : use.projeto,
                    atividade: use === null || use === void 0 ? void 0 : use.atividade,
                    data: use === null || use === void 0 ? void 0 : use.data,
                    inicio: use === null || use === void 0 ? void 0 : use.inicio,
                    fim: use === null || use === void 0 ? void 0 : use.fim,
                    obs: use === null || use === void 0 ? void 0 : use.obs,
                    status: use === null || use === void 0 ? void 0 : use.status
                };
                return DescItemOfSummary;
            });
            const responseDTO = {
                summary,
            };
            return responseDTO;
        });
    }
}
exports.default = LoadFatSummaryService;
