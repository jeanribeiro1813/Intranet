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
const CreateReservaServices_1 = __importDefault(require("../../services/Reserva/CreateReservaServices"));
const UpdateReservaServices_1 = __importDefault(require("../../services/Reserva/UpdateReservaServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Paginas/LoadSummyService"));
const DeleteReservaServices_1 = __importDefault(require("../../services/Reserva/DeleteReservaServices"));
class ReservaController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadFuncao = new LoadSummyService_1.default();
            const funcao = yield loadFuncao.executeDes();
            return response.json(funcao.summary);
        });
    }
    //Criação Atividade
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_reserva_uuid, placa, usuario, dt_saida, dt_chegada, dt_cancel, hora_saida, hora_chegada, km_saida, km_chegada, projeto, cancelado, desc_cancel, dev_obs, cod_reserva } = request.body;
            const service = new CreateReservaServices_1.default();
            const result = yield service.execute({
                cod_reserva_uuid, placa, usuario, dt_saida,
                dt_chegada, dt_cancel, hora_saida, hora_chegada, km_saida,
                km_chegada, projeto, cancelado, desc_cancel, dev_obs, cod_reserva
            });
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.json(result);
        });
    }
    // Upgrade
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_reserva_uuid } = request.params;
            const { placa, usuario, dt_saida, dt_chegada, dt_cancel, hora_saida, hora_chegada, km_saida, km_chegada, projeto, cancelado, desc_cancel, dev_obs, cod_reserva } = request.body;
            const updateFatu = new UpdateReservaServices_1.default();
            const fatura = yield updateFatu.update({
                cod_reserva_uuid, placa, usuario, dt_saida,
                dt_chegada, dt_cancel, hora_saida, hora_chegada, km_saida,
                km_chegada, projeto, cancelado, desc_cancel, dev_obs, cod_reserva
            });
            return response.json(fatura);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_reserva_uuid } = request.params;
            const deleteAtividade = new DeleteReservaServices_1.default();
            deleteAtividade.execute({ cod_reserva_uuid });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = ReservaController;
