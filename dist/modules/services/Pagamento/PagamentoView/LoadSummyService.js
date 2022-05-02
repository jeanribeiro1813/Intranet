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
const PagamentoViewRepository_1 = __importDefault(require("../../../typeorm/repositories/PagamentoViewRepository"));
class LoadPagamentoSummaryService {
    executeDes() {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosrRepository = (0, typeorm_1.getCustomRepository)(PagamentoViewRepository_1.default);
            const user = yield projetosrRepository.find({});
            const summary = user.map((use) => {
                const DescItemOfSummary = {
                    uuidpagamento: use.uuidpagamento,
                    cliente: use.cliente,
                    empresa: use.empresa,
                    departamento: use.departamento,
                    nprojeto: use.nprojeto,
                    contrato: use.contrato,
                    contabn1: use.contabn1,
                    grupon2: use.grupon2,
                    subgrupon3: use.subgrupon3,
                    usuario: use.usuario,
                    cpf_cnpj: use.cpf_cnpj,
                    valor_pago: use.valor_pago,
                    data_pagto: use.data_pagto,
                    data_vecto: use.data_vecto,
                    banco: use.banco,
                    incidencia: use.incidencia,
                    parcelas_n: use.parcelas_n,
                    n_doc_pagto: use.n_doc_pagto,
                    formapagto: use.formapagto,
                    status: use.status,
                    obs: use.obs,
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
exports.default = LoadPagamentoSummaryService;
