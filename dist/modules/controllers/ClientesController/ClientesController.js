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
const CreateClientesServices_1 = __importDefault(require("../../services/Clientes/CreateClientesServices"));
const UpdateClientesServices_1 = __importDefault(require("../../services/Clientes/UpdateClientesServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Clientes/LoadSummyService"));
const DeleteClientesServices_1 = __importDefault(require("../../services/Clientes/DeleteClientesServices"));
class CargoController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadFuncao = new LoadSummyService_1.default();
            const funcao = yield loadFuncao.executeDes();
            return response.json(funcao.summary);
        });
    }
    //Criação Cargo
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidcliente, projeto, cliente } = request.body;
            const service = new CreateClientesServices_1.default();
            const result = yield service.execute({
                uuidcliente, projeto, cliente
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
            const { uuidcliente } = request.params;
            const { projeto, cliente } = request.body;
            const updateFatu = new UpdateClientesServices_1.default();
            const fatura = yield updateFatu.update({
                uuidcliente, projeto, cliente
            });
            return response.json(fatura);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidcliente } = request.params;
            const deleteCargo = new DeleteClientesServices_1.default();
            deleteCargo.execute({ uuidcliente });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = CargoController;
