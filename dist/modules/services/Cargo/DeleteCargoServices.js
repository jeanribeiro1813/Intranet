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
const AppErrors_1 = __importDefault(require("../../../shared/errors/AppErrors"));
const typeorm_1 = require("typeorm");
const CargoRepository_1 = __importDefault(require("../../typeorm/repositories/CargoRepository"));
class DeleteCargoService {
    execute({ uuidcargo }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(CargoRepository_1.default);
            const service = yield usersRepository.findOne(uuidcargo);
            if (!service) {
                throw new AppErrors_1.default('Não Existe ', 402);
            }
            yield usersRepository.remove(service);
        });
    }
}
exports.default = DeleteCargoService;
