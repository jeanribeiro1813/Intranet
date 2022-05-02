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
const ManuntencoesRepository_1 = __importDefault(require("../../typeorm/repositories/ManuntencoesRepository"));
class UpdateManutencaoService {
    update({ cod_manutencao_uuid, descricao, valor, cod_manutencao }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(ManuntencoesRepository_1.default);
            const manute = yield usersRepository.findOne(cod_manutencao_uuid);
            if (!manute) {
                throw new AppErrors_1.default('manuteção não existe', 404);
            }
            manute.descricao = descricao ? descricao : manute.descricao;
            manute.valor = valor ? valor : manute.valor;
            //manute.cod_manutencao = cod_manutencao ? cod_manutencao : manute.cod_manutencao;
            yield usersRepository.save(manute);
            return manute;
        });
    }
}
exports.default = UpdateManutencaoService;
