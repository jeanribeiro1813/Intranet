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
const ProjetosViewRepository_1 = __importDefault(require("../../../typeorm/repositories/ProjetosViewRepository"));
class LoadProjetoSummaryService {
    executeDes() {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosrRepository = (0, typeorm_1.getCustomRepository)(ProjetosViewRepository_1.default);
            const user = yield projetosrRepository.find();
            const summary = user.map((use) => {
                const DescItemOfSummary = {
                    uuidprojeto: use.uuidprojeto,
                    nprojeto: use.nprojeto,
                    projeto: use.projeto,
                    data: use.data,
                    uuiddeparta: use.uuiddeparta,
                    departamento: use.departamento,
                    contrato: use.contrato,
                    uuidcliente: use.uuidcliente,
                    cliente: use.cliente,
                    numero: use.numero,
                    gerente: use.gerente,
                    equipe: use.equipe,
                    status: use.status,
                    proposta: use.proposta,
                    previsao: use.previsao,
                    nproc_origem: use.nproc_origem,
                    valor: use.valor,
                    memoalt: use.memoalt,
                    dt_fim: use.dt_fim
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
exports.default = LoadProjetoSummaryService;
