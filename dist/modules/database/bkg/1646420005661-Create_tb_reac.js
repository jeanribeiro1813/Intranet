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
exports.CreatetbReac1646420005661 = void 0;
const typeorm_1 = require("typeorm");
class CreatetbReac1646420005661 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'tb_reac',
                columns: [
                    {
                        name: 'cod',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'numero',
                        type: 'int'
                    },
                    {
                        name: 'rev',
                        type: 'int'
                    },
                    {
                        name: 'empresa',
                        type: 'varchar'
                    },
                    {
                        name: 'cliente',
                        type: 'varchar'
                    },
                    {
                        name: 'cli_cnpj',
                        type: 'varchar'
                    },
                    {
                        name: 'cli_end',
                        type: 'varchar'
                    },
                    {
                        name: 'cli_contato',
                        type: 'varchar'
                    },
                    {
                        name: 'interessado',
                        type: 'varchar'
                    },
                    {
                        name: 'int_cnpj',
                        type: 'varchar'
                    },
                    {
                        name: 'int_end',
                        type: 'varchar'
                    },
                    {
                        name: 'int_contato',
                        type: 'varchar'
                    },
                    {
                        name: 'end_amostragem',
                        type: 'varchar'
                    },
                    {
                        name: 'local_amostragem',
                        type: 'varchar'
                    },
                    {
                        name: 'tecnico_amostragem',
                        type: 'varchar'
                    },
                    {
                        name: 'plano_amostragem',
                        type: 'varchar'
                    },
                    {
                        name: 'url',
                        type: 'varchar'
                    },
                    {
                        name: 'fichas_amostragem',
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
            queryRunner.dropTable('tb_reac');
        });
    }
}
exports.CreatetbReac1646420005661 = CreatetbReac1646420005661;
