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
const PagamentoRepository_1 = __importDefault(require("../../../typeorm/repositories/PagamentoRepository"));
class UpdatePagamentoService {
    update({ uuidpagamento, empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago, data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(PagamentoRepository_1.default);
            const result = yield usersRepository.findOne(uuidpagamento);
            if (!result) {
                throw new AppErrors_1.default('client não existe', 404);
            }
            result.empresa = empresa ? empresa : result.empresa;
            result.uuidprojeto = uuidprojeto ? uuidprojeto : result.uuidprojeto;
            result.n1 = n1 ? n1 : result.n1;
            result.n2 = n2 ? n2 : result.n2;
            result.n3 = n3 ? n3 : result.n3;
            result.uuidcolab_forne = uuidcolab_forne ? uuidcolab_forne : result.uuidcolab_forne;
            result.valor_pago = valor_pago ? valor_pago : result.valor_pago;
            result.data_pagto = data_pagto ? data_pagto : result.data_pagto;
            result.data_vecto = data_vecto ? data_vecto : result.data_vecto;
            result.uuidbancos = uuidbancos ? uuidbancos : result.uuidbancos;
            result.incidencia = incidencia ? incidencia : result.incidencia;
            result.parcelas_n = parcelas_n ? parcelas_n : result.parcelas_n;
            result.n_doc_pagto = n_doc_pagto ? n_doc_pagto : result.n_doc_pagto;
            result.uuidformapagto = uuidformapagto ? uuidformapagto : result.uuidformapagto;
            result.status = status ? status : result.status;
            result.obs = obs ? obs : result.obs;
            yield usersRepository.save(result);
            return result;
        });
    }
}
exports.default = UpdatePagamentoService;
