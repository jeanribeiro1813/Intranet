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
const CarrosRepository_1 = __importDefault(require("../../typeorm/repositories/CarrosRepository"));
class UpdateCargoService {
    update({ id_uuid, placa, carro, ano, cor, km, ativo, garagem, id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(CarrosRepository_1.default);
            const carros = yield usersRepository.findOne(id_uuid);
            if (!carros) {
                throw new AppErrors_1.default('carros não existe', 404);
            }
            carros.placa = placa ? placa : carros.placa;
            carros.carro = carro ? carro : carros.carro;
            carros.ano = ano ? ano : carros.ano;
            carros.cor = cor ? cor : carros.cor;
            carros.km = km ? km : carros.km;
            carros.ativo = ativo ? ativo : carros.ativo;
            carros.garagem = garagem ? garagem : carros.garagem;
            carros.id = id ? id : carros.id;
            yield usersRepository.save(carros);
            return carros;
        });
    }
}
exports.default = UpdateCargoService;
