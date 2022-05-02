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
let Reserva = class Reserva {
    constructor() {
        if (!this.cod_reserva_uuid) {
            this.cod_reserva_uuid = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Reserva.prototype, "cod_reserva_uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reserva.prototype, "placa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reserva.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], Reserva.prototype, "dt_saida", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], Reserva.prototype, "dt_chegada", void 0);
__decorate([
    (0, typeorm_1.Column)('time with time zone'),
    __metadata("design:type", String)
], Reserva.prototype, "hora_saida", void 0);
__decorate([
    (0, typeorm_1.Column)('time with time zone'),
    __metadata("design:type", String)
], Reserva.prototype, "hora_chegada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reserva.prototype, "km_saida", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reserva.prototype, "km_chegada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reserva.prototype, "projeto", void 0);
__decorate([
    (0, typeorm_1.Column)('bit'),
    __metadata("design:type", Number)
], Reserva.prototype, "cancelado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reserva.prototype, "desc_cancel", void 0);
__decorate([
    (0, typeorm_1.Column)('time with time zone'),
    __metadata("design:type", String)
], Reserva.prototype, "dt_cancel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reserva.prototype, "dev_obs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Reserva.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Reserva.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Reserva.prototype, "cod_reserva", void 0);
Reserva = __decorate([
    (0, typeorm_1.Entity)('tb_reserva'),
    __metadata("design:paramtypes", [])
], Reserva);
exports.default = Reserva;
