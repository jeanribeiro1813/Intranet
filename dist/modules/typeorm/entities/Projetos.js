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
const uuid_1 = require("uuid");
let Projetos = class Projetos {
    constructor() {
        if (!this.uuidprojeto) {
            this.uuidprojeto = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Projetos.prototype, "uuidprojeto", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], Projetos.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "nprojeto", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Projetos.prototype, "contrato", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "projeto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "cliente2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "gerente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "coordenador", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Projetos.prototype, "equipe", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "proposta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], Projetos.prototype, "previsao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "nproc_origem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "memoalt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projetos.prototype, "dt_fim", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Projetos.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Projetos.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Projetos.prototype, "cod_proj", void 0);
Projetos = __decorate([
    (0, typeorm_1.Entity)('tb_proj'),
    __metadata("design:paramtypes", [])
], Projetos);
exports.default = Projetos;
