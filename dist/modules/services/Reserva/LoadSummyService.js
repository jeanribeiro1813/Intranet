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
const ReservaRepository_1 = __importDefault(require("../../typeorm/repositories/ReservaRepository"));
class LoadClientesSummaryService {
    executeDes() {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosrRepository = (0, typeorm_1.getCustomRepository)(ReservaRepository_1.default);
            const user = yield projetosrRepository.find({});
            const summary = user.map((use) => {
                const DescItemOfSummary = {
                    cod_reserva_uuid: use.cod_reserva_uuid,
                    placa: use.placa,
                    usuario: use.usuario,
                    dt_saida: use.dt_saida,
                    dt_chegada: use.dt_chegada,
                    hora_saida: use.hora_saida,
                    hora_chegada: use.hora_chegada,
                    km_saida: use.km_saida,
                    km_chegada: use.km_chegada,
                    projeto: use.projeto,
                    cancelado: use.cancelado,
                    desc_cancel: use.desc_cancel,
                    dt_cancel: use.dt_cancel,
                    dev_obs: use.dev_obs,
                    cod_reserva: use.cod_reserva
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
exports.default = LoadClientesSummaryService;
