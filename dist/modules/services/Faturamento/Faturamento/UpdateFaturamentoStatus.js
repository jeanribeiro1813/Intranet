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
const FaturamentoRepository_1 = __importDefault(require("../../../../modules/typeorm/repositories/FaturamentoRepository"));
const AppErrors_1 = __importDefault(require("../../../../shared/errors/AppErrors"));
const UpdateFaturamentoServices_1 = __importDefault(require("./UpdateFaturamentoServices"));
class UpdateFaturamentoServices {
    executeStatus({ uuidusuario, uuidprojeto, data, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosRepository = (0, typeorm_1.getCustomRepository)(FaturamentoRepository_1.default);
            //Criando um Select personalizado como filtrando 2 colunas
            const faturas = yield projetosRepository.createQueryBuilder().select()
                .where("uuidusuario::text ILIKE :uuidusuario and\
      uuidprojeto::text ILIKE :uuidprojeto  and\
      substring(data::text, 1,7) ILIKE :data\ ", { uuidusuario: `%${uuidusuario}%`,
                uuidprojeto: `%${uuidprojeto}%`,
                data: `%${data}%` }).getMany();
            console.log(faturas);
            if (!faturas) {
                throw new AppErrors_1.default('Não Existe', 401);
            }
            const createfaturaService = new UpdateFaturamentoServices_1.default();
            faturas.forEach(function (dados) {
                return __awaiter(this, void 0, void 0, function* () {
                    dados.status = status;
                    yield createfaturaService.update(dados);
                });
            });
            return faturas;
        });
    }
}
exports.default = UpdateFaturamentoServices;
