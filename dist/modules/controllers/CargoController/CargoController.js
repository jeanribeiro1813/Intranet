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
const CreateCargoServices_1 = __importDefault(require("../../services/Cargo/CreateCargoServices"));
const UpdateCargoServices_1 = __importDefault(require("../../services/Cargo/UpdateCargoServices"));
const LoadSummyService_1 = __importDefault(require("../../services/Cargo/LoadSummyService"));
const DeleteCargoServices_1 = __importDefault(require("../../services/Cargo/DeleteCargoServices"));
const LoadIndexCargoServices_1 = __importDefault(require("../../services/Cargo/LoadIndexCargoServices"));
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
            const { uuidcargo, cargo, cod_cargo } = request.body;
            const service = new CreateCargoServices_1.default();
            const result = yield service.execute({
                uuidcargo, cargo, cod_cargo
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
            const { uuidcargo } = request.params;
            const { cargo, cod_cargo } = request.body;
            const updateFatu = new UpdateCargoServices_1.default();
            const fatura = yield updateFatu.update({
                uuidcargo, cargo, cod_cargo
            });
            return response.json(fatura);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidcargo } = request.params;
            const deleteCargo = new DeleteCargoServices_1.default();
            deleteCargo.execute({ uuidcargo });
            return response.json('Delete realizado com sucesso');
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidcargo } = request.params;
            const Cargo = new LoadIndexCargoServices_1.default();
            const result = yield Cargo.index({ uuidcargo });
            return response.json(result);
        });
    }
}
exports.default = CargoController;
