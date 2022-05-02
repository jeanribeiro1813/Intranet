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
const PagamentoViewRepository_1 = __importDefault(require("../../../typeorm/repositories/PagamentoViewRepository"));
const AppErrors_1 = __importDefault(require("../../../../shared/errors/AppErrors"));
class LoadFilterServices {
    filter({ uuidpagamento }) {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosRepository = (0, typeorm_1.getCustomRepository)(PagamentoViewRepository_1.default);
            //Criando um Select personalizado como filtrando 2 colunas
            const index_Prod = yield projetosRepository.createQueryBuilder().select()
                .where(`uuidpagamento :: text  ILIKE :uuidpagamento `, { uuidpagamento: `%${uuidpagamento}%` }).getMany();
            if (!index_Prod) {
                throw new AppErrors_1.default('Não Existe', 40);
            }
            return index_Prod;
        });
    }
}
exports.default = LoadFilterServices;
