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
const RamaisRepository_1 = __importDefault(require("../../typeorm/repositories/RamaisRepository"));
class CreateRamaisService {
    execute({ uuidramal, ramal, cod_atv }) {
        return __awaiter(this, void 0, void 0, function* () {
            const ramaisRepository = (0, typeorm_1.getCustomRepository)(RamaisRepository_1.default);
            const checkRamaisExists = yield ramaisRepository.findById(uuidramal);
            if (checkRamaisExists) {
                throw new AppErrors_1.default('Nome já existe.', 404);
            }
            const cliet = ramaisRepository.create({
                uuidramal, ramal, cod_atv
            });
            yield ramaisRepository.save(cliet);
            return cliet;
        });
    }
}
exports.default = CreateRamaisService;
