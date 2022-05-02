"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let PagamentoView = class PagamentoView {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "uuidpagamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "nprojeto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "contrato", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "contabn1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "grupon2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "subgrupon3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "cpf_cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "valor_pago", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], PagamentoView.prototype, "data_pagto", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], PagamentoView.prototype, "data_vecto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "banco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "incidencia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "parcelas_n", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "n_doc_pagto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "formapagto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PagamentoView.prototype, "obs", void 0);
PagamentoView = __decorate([
    (0, typeorm_1.ViewEntity)('vw_tb_pagamentos')
], PagamentoView);
exports.default = PagamentoView;
