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
exports.CreatetbEqpt1646419878924 = void 0;
const typeorm_1 = require("typeorm");
class CreatetbEqpt1646419878924 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'tb_eqpt',
                columns: [
                    {
                        name: 'cod_equipam',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'grupo',
                        type: 'varchar'
                    },
                    {
                        name: 'cod_equipa',
                        type: 'varchar'
                    },
                    {
                        name: 'nome_equipa',
                        type: 'varchar'
                    },
                    {
                        name: 'val_garantia',
                        type: 'date'
                    },
                    {
                        name: 'fornec_equipa',
                        type: 'varchar'
                    },
                    {
                        name: 'up_nfiscal',
                        type: 'varchar'
                    },
                    {
                        name: 'up_cert_calib',
                        type: 'varchar'
                    },
                    {
                        name: 'localizacao',
                        type: 'varchar'
                    },
                    {
                        name: 'descricao',
                        type: 'varchar'
                    },
                    {
                        name: 'observacao',
                        type: 'varchar'
                    },
                    {
                        name: 'status',
                        type: 'boolean'
                    },
                    {
                        name: 'marca',
                        type: 'varchar'
                    },
                    {
                        name: 'modelo',
                        type: 'varchar'
                    },
                    {
                        name: 'ult_calib',
                        type: 'date'
                    },
                    {
                        name: 'venc_calib',
                        type: 'date'
                    },
                    {
                        name: 'historico',
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
            queryRunner.dropTable('tb_eqpt');
        });
    }
}
exports.CreatetbEqpt1646419878924 = CreatetbEqpt1646419878924;
