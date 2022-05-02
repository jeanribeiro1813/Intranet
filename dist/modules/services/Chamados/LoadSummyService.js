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
const ChamadosRepository_1 = __importDefault(require("../../typeorm/repositories/ChamadosRepository"));
class LoadChamadosSummaryService {
    executeDes() {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosrRepository = (0, typeorm_1.getCustomRepository)(ChamadosRepository_1.default);
            const user = yield projetosrRepository.find({});
            const summary = user.map((use) => {
                const DescItemOfSummary = {
                    cod_chamado_uuid: use.cod_chamado_uuid,
                    cod_usuario: use.cod_usuario,
                    equipamento: use.equipamento,
                    descricao: use.descricao,
                    prioridade: use.prioridade,
                    dt_solicitacao: use.dt_solicitacao,
                    dt_conclusao: use.dt_conclusao,
                    desc_conclusao: use.desc_conclusao,
                    cod_chamado: use.cod_chamado,
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
exports.default = LoadChamadosSummaryService;
