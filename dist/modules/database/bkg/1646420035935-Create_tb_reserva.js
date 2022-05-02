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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatetbReserva1646420035935 = void 0;
const typeorm_1 = require("typeorm");
class CreatetbReserva1646420035935 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'tb_reserva',
                columns: [
                    {
                        name: 'cod_reserva',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'placa',
                        type: 'varchar'
                    },
                    {
                        name: 'usuario',
                        type: 'varchar'
                    },
                    {
                        name: 'dt_saida',
                        type: 'date'
                    },
                    {
                        name: 'dt_chegada',
                        type: 'date'
                    },
                    {
                        name: 'hora_saida',
                        type: 'time'
                    },
                    {
                        name: 'hora_chegada',
                        type: 'time'
                    },
                    {
                        name: 'km_saida',
                        type: 'float'
                    },
                    {
                        name: 'km_chegada',
                        type: 'float'
                    },
                    {
                        name: 'projeto',
                        type: 'varchar'
                    },
                    {
                        name: 'cancelado',
                        type: 'bit'
                    },
                    {
                        name: 'desc_cancel',
                        type: 'varchar'
                    },
                    {
                        name: 'dt_cancel',
                        type: 'timestamp'
                    },
                    {
                        name: 'dev_obs',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.dropTable('tb_reserva');
        });
    }
}
exports.CreatetbReserva1646420035935 = CreatetbReserva1646420035935;
