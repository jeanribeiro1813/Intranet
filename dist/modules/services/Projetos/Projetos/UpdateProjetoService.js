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
const ProjetosRepository_1 = __importDefault(require("../../../typeorm/repositories/ProjetosRepository"));
class UpdateprojetosService {
    updateProj({ uuidprojeto, data, contrato, nprojeto, projeto, cliente, cliente2, numero, gerente, coordenador, equipe, status, proposta, departamento, previsao, nproc_origem, valor, memoalt, dt_fim, cod_proj, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(ProjetosRepository_1.default);
            const projetos = yield usersRepository.findOne(uuidprojeto);
            if (!projetos) {
                throw new AppErrors_1.default('projetos não existe', 404);
            }
            projetos.contrato = contrato ? contrato : projetos.contrato;
            projetos.data = data ? data : projetos.data;
            projetos.departamento = departamento ? departamento : projetos.departamento;
            projetos.nprojeto = nprojeto ? nprojeto : projetos.nprojeto;
            projetos.projeto = projeto ? projeto : projetos.projeto;
            projetos.cliente = cliente ? cliente : projetos.cliente;
            projetos.numero = numero ? numero : projetos.numero;
            projetos.gerente = gerente ? gerente : projetos.gerente;
            projetos.coordenador = coordenador ? coordenador : projetos.coordenador;
            projetos.equipe = equipe ? equipe : projetos.equipe;
            projetos.status = status ? status : projetos.status;
            projetos.proposta = proposta ? proposta : projetos.proposta;
            projetos.previsao = previsao ? previsao : projetos.previsao;
            projetos.nproc_origem = nproc_origem ? nproc_origem : projetos.nproc_origem;
            projetos.valor = valor ? valor : projetos.valor;
            projetos.memoalt = memoalt ? memoalt : projetos.memoalt;
            projetos.dt_fim = dt_fim ? dt_fim : projetos.dt_fim;
            projetos.cod_proj = cod_proj ? cod_proj : projetos.cod_proj;
            yield usersRepository.save(projetos);
            return projetos;
        });
    }
}
exports.default = UpdateprojetosService;
