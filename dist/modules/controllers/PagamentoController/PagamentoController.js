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
const CreatePagamentoServices_1 = __importDefault(require("../../services/Pagamento/Pagamento/CreatePagamentoServices"));
const UpdatePagamentoServices_1 = __importDefault(require("../../services/Pagamento/Pagamento/UpdatePagamentoServices"));
const DeletePagamentoServices_1 = __importDefault(require("../../services/Pagamento/Pagamento/DeletePagamentoServices"));
class CargoController {
    //Criação Cargo
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidpagamento, empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago, data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs } = request.body;
            const service = new CreatePagamentoServices_1.default();
            const result = yield service.execute({
                uuidpagamento, empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago,
                data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs
            });
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.json('Criado com sucesso');
        });
    }
    // Upgrade
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidpagamento } = request.params;
            const { empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago, data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs } = request.body;
            const updateFatu = new UpdatePagamentoServices_1.default();
            const fatura = yield updateFatu.update({
                uuidpagamento, empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago,
                data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs
            });
            return response.json('Atualizado com sucesso');
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidpagamento } = request.params;
            const deleteCargo = new DeletePagamentoServices_1.default();
            deleteCargo.execute({ uuidpagamento });
            return response.json('Delete realizado com sucesso');
        });
    }
}
exports.default = CargoController;
