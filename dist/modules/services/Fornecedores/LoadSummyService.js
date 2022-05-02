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
const FornecedoresRepository_1 = __importDefault(require("../../typeorm/repositories/FornecedoresRepository"));
class LoadFornecedoresSummaryService {
    executeDes() {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosrRepository = (0, typeorm_1.getCustomRepository)(FornecedoresRepository_1.default);
            const user = yield projetosrRepository.find({ order: {
                    uuidusuario: 'ASC'
                } });
            const summary = user.map((use) => {
                const DescItemOfSummary = {
                    uuidusuario: use.uuidusuario,
                    usuario: use.usuario,
                    tp_doc: use.tp_doc,
                    cpf_cnpj: use.cpf_cnpj,
                    email: use.email,
                    contato: use.contato,
                    contato2: use.contato2,
                    cargo: use.cargo,
                    status: use.status,
                    avatar: use.avatar,
                };
                return DescItemOfSummary;
            });
            const responseDTO = {
                summary,
            };
            return responseDTO;
        });
    }
}
exports.default = LoadFornecedoresSummaryService;
