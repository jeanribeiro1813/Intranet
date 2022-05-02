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
const CargoRepository_1 = __importDefault(require("../../typeorm/repositories/CargoRepository"));
class UpdateCargoService {
    update({ uuidcargo, cargo, cod_cargo }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(CargoRepository_1.default);
            const cargoService = yield usersRepository.findOne(uuidcargo);
            if (!cargoService) {
                throw new AppErrors_1.default('cargo não existe', 404);
            }
            cargoService.cargo = cargo ? cargo : cargoService.cargo;
            cargoService.cod_cargo = cod_cargo ? cod_cargo : cargoService.cod_cargo;
            yield usersRepository.save(cargoService);
            return cargoService;
        });
    }
}
exports.default = UpdateCargoService;
