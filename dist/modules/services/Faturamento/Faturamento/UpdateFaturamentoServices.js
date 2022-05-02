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
const AppErrors_1 = __importDefault(require("../../../../shared/errors/AppErrors"));
const FaturamentoRepository_1 = __importDefault(require("../../../typeorm/repositories/FaturamentoRepository"));
class CreatefaturaService {
    update({ uuidfat, uuidusuario, uuidprojeto, uuidatividade, data, inicio, fim, status, obs, empresa }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(FaturamentoRepository_1.default);
            const fatura = yield usersRepository.findOne(uuidfat);
            if (!fatura) {
                throw new AppErrors_1.default('fatura não existe', 404);
            }
            fatura.uuidfat = uuidfat ? uuidfat : fatura.uuidfat;
            fatura.uuidusuario = uuidusuario ? uuidusuario : fatura.uuidusuario;
            fatura.uuidprojeto = uuidprojeto ? uuidprojeto : fatura.uuidprojeto;
            fatura.uuidatividade = uuidatividade ? uuidatividade : fatura.uuidatividade;
            fatura.data = data ? data : fatura.data;
            fatura.inicio = inicio ? inicio : fatura.inicio;
            fatura.fim = fim ? fim : fatura.fim;
            fatura.status = status ? status : fatura.status;
            fatura.obs = obs ? obs : fatura.obs;
            fatura.empresa = empresa ? empresa : fatura.empresa;
            yield usersRepository.save(fatura);
            return fatura;
        });
    }
}
exports.default = CreatefaturaService;
