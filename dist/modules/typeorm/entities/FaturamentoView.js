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
let FaturamentoView = class FaturamentoView {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FaturamentoView.prototype, "uuidfat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FaturamentoView.prototype, "uuidusuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FaturamentoView.prototype, "uuidprojeto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "nprojeto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "projeto", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FaturamentoView.prototype, "uuidcontrato", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "contrato", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FaturamentoView.prototype, "uuidcliente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], FaturamentoView.prototype, "uuidatividade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "atividade", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], FaturamentoView.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "inicio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "fim", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FaturamentoView.prototype, "obs", void 0);
FaturamentoView = __decorate([
    (0, typeorm_1.ViewEntity)('vw_tb_fat')
], FaturamentoView);
exports.default = FaturamentoView;
