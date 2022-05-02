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
const LoadProjectsServices_1 = __importDefault(require("../../services/Projetos//ProjetosView/LoadProjectsServices"));
const LoadySummaryProjeServices_1 = __importDefault(require("../../services/Projetos/ProjetosView/LoadySummaryProjeServices"));
const LoadIndexProjeServices_1 = __importDefault(require("../../services/Projetos/ProjetosView/LoadIndexProjeServices"));
class ProjetosControllers {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadFuncao = new LoadySummaryProjeServices_1.default();
            const funcao = yield loadFuncao.executeDes();
            return response.json(funcao);
        });
    }
    /**
     * This method is uded for get projects by filter : nprojeto , contrato, status
     */
    loadProjects(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nprojeto, contrato, status } = request.body;
            const P = new LoadProjectsServices_1.default();
            const projetos = yield P.loadProjetos({ nprojeto, contrato, status });
            return response.json(projetos);
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidprojeto } = request.params;
            const P = new LoadIndexProjeServices_1.default();
            const projetos = yield P.index({ uuidprojeto });
            return response.json(projetos);
        });
    }
}
exports.default = ProjetosControllers;
