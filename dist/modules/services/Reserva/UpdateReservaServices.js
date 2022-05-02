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
const AppErrors_1 = __importDefault(require("../../../shared/errors/AppErrors"));
const ReservaRepository_1 = __importDefault(require("../../typeorm/repositories/ReservaRepository"));
class UpdateReservaService {
    update({ cod_reserva_uuid, placa, usuario, dt_saida, dt_chegada, hora_saida, hora_chegada, km_saida, km_chegada, projeto, cancelado, desc_cancel, dev_obs, cod_reserva }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(ReservaRepository_1.default);
            const reserva = yield usersRepository.findOne(cod_reserva_uuid);
            if (!reserva) {
                throw new AppErrors_1.default('reserva não existe', 404);
            }
            reserva.placa = placa ? placa : reserva.placa;
            reserva.usuario = usuario ? usuario : reserva.usuario;
            reserva.dt_saida = dt_saida ? dt_saida : reserva.dt_saida;
            reserva.dt_chegada = dt_chegada ? dt_chegada : reserva.dt_chegada;
            reserva.hora_saida = hora_saida ? hora_saida : reserva.hora_saida;
            reserva.hora_chegada = hora_chegada ? hora_chegada : reserva.hora_chegada;
            reserva.km_saida = km_saida ? km_saida : reserva.km_saida;
            reserva.km_chegada = km_chegada ? km_chegada : reserva.km_chegada;
            reserva.projeto = projeto ? projeto : reserva.projeto;
            reserva.cancelado = cancelado ? cancelado : reserva.cancelado;
            reserva.desc_cancel = desc_cancel ? desc_cancel : reserva.desc_cancel;
            reserva.dev_obs = dev_obs ? dev_obs : reserva.dev_obs;
            reserva.cod_reserva = cod_reserva ? cod_reserva : reserva.cod_reserva;
            yield usersRepository.save(reserva);
            return reserva;
        });
    }
}
exports.default = UpdateReservaService;
