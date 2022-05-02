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
const CreateCarrosServices_1 = __importDefault(require("../../services/Carros/CreateCarrosServices"));
const UpdateCarrosServices_1 = __importDefault(require("../../services/Carros/UpdateCarrosServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Carros/LoadSummyService"));
const DeleteCarrosServices_1 = __importDefault(require("../../services/Carros/DeleteCarrosServices"));
class CargoController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadFuncao = new LoadSummyService_1.default();
            const funcao = yield loadFuncao.executeDes();
            return response.json(funcao);
        });
    }
    //Criação Carros
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_uuid, placa, carro, ano, cor, km, ativo, garagem, id } = request.body;
            const service = new CreateCarrosServices_1.default();
            const result = yield service.execute({
                id_uuid, placa, carro, ano, cor, km, ativo, garagem, id
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
            const { id_uuid } = request.params;
            const { placa, carro, ano, cor, km, ativo, garagem, id } = request.body;
            const updateCarros = new UpdateCarrosServices_1.default();
            const cargo = yield updateCarros.update({
                id_uuid, placa, carro, ano, cor, km, ativo, garagem, id
            });
            return response.json(cargo);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_uuid } = request.params;
            const deleteCargo = new DeleteCarrosServices_1.default();
            deleteCargo.execute({ id_uuid });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = CargoController;
