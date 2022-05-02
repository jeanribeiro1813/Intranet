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
const AppErrors_1 = __importDefault(require("../../../../shared/errors/AppErrors"));
class LoadPorUsersServices {
    execute({ uuidusuario, data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosRepository = (0, typeorm_1.getCustomRepository)(FaturamentoViewsRepository_1.default);
            //Criando um Select personalizado como filtrando 2 colunas
            const index_Prod = yield projetosRepository.createQueryBuilder().select()
                .where(`uuidusuario :: text  ILIKE :uuidusuario and substring(data::text,1,7) ILIKE :data `, { uuidusuario: `%${uuidusuario}%`, data: `%${data}%` }).getMany();
            console.log(index_Prod);
            if (!index_Prod) {
                throw new AppErrors_1.default('Não Existe', 40);
            }
            const summary = index_Prod.map((use) => {
                const DescItemOfSummary = {
                    uuidfat: use === null || use === void 0 ? void 0 : use.uuidfat,
                    cliente: use === null || use === void 0 ? void 0 : use.cliente,
                    departamento: use === null || use === void 0 ? void 0 : use.departamento,
                    nprojeto: use === null || use === void 0 ? void 0 : use.nprojeto,
                    projeto: use === null || use === void 0 ? void 0 : use.projeto,
                    contrato: use === null || use === void 0 ? void 0 : use.contrato,
                    atividade: use === null || use === void 0 ? void 0 : use.atividade,
                    data: use === null || use === void 0 ? void 0 : use.data,
                    inicio: use === null || use === void 0 ? void 0 : use.inicio,
                    fim: use === null || use === void 0 ? void 0 : use.fim,
                    obs: use === null || use === void 0 ? void 0 : use.obs,
                    status: use === null || use === void 0 ? void 0 : use.status
                };
                return DescItemOfSummary;
            });
            const result = {
                summary
            };
            return result.summary;
        });
    }
}
exports.default = LoadPorUsersServices;
