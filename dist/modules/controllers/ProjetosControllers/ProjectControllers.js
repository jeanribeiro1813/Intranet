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
const CreateProjetosServices_1 = __importDefault(require("../../services/Projetos/Projetos/CreateProjetosServices"));
const UpdateProjetoService_1 = __importDefault(require("../../services/Projetos/Projetos/UpdateProjetoService"));
class ProjetosControllers {
    //Update
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidprojeto } = request.params;
            const { contrato, data, nprojeto, projeto, cliente, cliente2, numero, gerente, coordenador, equipe, status, proposta, departamento, previsao, nproc_origem, valor, memoalt, dt_fim, cod_proj } = request.body;
            const updateService = new UpdateProjetoService_1.default();
            const result = yield updateService.updateProj({
                uuidprojeto,
                contrato,
                data,
                departamento,
                nprojeto,
                projeto,
                cliente,
                cliente2,
                numero,
                gerente,
                coordenador,
                equipe,
                status,
                proposta,
                previsao,
                nproc_origem,
                valor,
                memoalt,
                dt_fim,
                cod_proj
            });
            return response.json(result);
        });
    }
    //Crate
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidprojeto, data, contrato, nprojeto, projeto, cliente, cliente2, numero, gerente, coordenador, equipe, status, proposta, departamento, previsao, nproc_origem, valor, memoalt, dt_fim, cod_proj } = request.body;
            const indexProj = new CreateProjetosServices_1.default();
            const showPorIndex = yield indexProj.execute({ uuidprojeto, data, contrato, nprojeto, projeto, cliente, cliente2,
                numero,
                gerente,
                coordenador,
                equipe,
                status,
                proposta,
                departamento,
                previsao,
                nproc_origem,
                valor,
                memoalt,
                dt_fim,
                cod_proj });
            return response.json(showPorIndex);
        });
    }
}
exports.default = ProjetosControllers;
