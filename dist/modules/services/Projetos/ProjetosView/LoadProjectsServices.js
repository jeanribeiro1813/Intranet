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
const AppErrors_1 = __importDefault(require("../../../../shared/errors/AppErrors"));
const ProjetosViewRepository_1 = __importDefault(require("../../..//typeorm/repositories/ProjetosViewRepository"));
class LoadProjectsServices {
    loadProjetos({ nprojeto, contrato, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosRepository = (0, typeorm_1.getCustomRepository)(ProjetosViewRepository_1.default);
            //Criando um Select personalizado como filtrando 2 colunas
            const projeto = yield projetosRepository.createQueryBuilder().select()
                .where('(nprojeto ILIKE :nprojeto and contrato ILIKE :contrato) or status ilike :status', { nprojeto: `%${nprojeto}%`, contrato: `%${contrato}%`, status: `%${status}%` }).getMany();
            if (!projeto) {
                throw new AppErrors_1.default('Não Existe', 405);
            }
            return projeto;
        });
    }
}
exports.default = LoadProjectsServices;
