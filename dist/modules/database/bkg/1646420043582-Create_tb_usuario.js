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
exports.CreatetbUsuario1646420043582 = void 0;
const typeorm_1 = require("typeorm");
class CreatetbUsuario1646420043582 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'tb_usuario',
                columns: [
                    {
                        name: 'cod_usuario',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'login',
                        type: 'varchar'
                    },
                    {
                        name: 'senha',
                        type: 'varchar'
                    },
                    {
                        name: 'nome_usuario',
                        type: 'varchar'
                    },
                    {
                        name: 'n_cnh',
                        type: 'int'
                    },
                    {
                        name: 'dt_validade',
                        type: 'date'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'ramal',
                        type: 'int'
                    },
                    {
                        name: 'status',
                        type: 'varchar'
                    },
                    {
                        name: 'h_status',
                        type: 'varchar'
                    },
                    {
                        name: 'last_log',
                        type: 'timestamp'
                    },
                    {
                        name: 'log_time',
                        type: 'timestamp'
                    },
                    {
                        name: 'dt_nasc',
                        type: 'date'
                    },
                    {
                        name: 'contato',
                        type: 'varchar'
                    },
                    {
                        name: 'contato2',
                        type: 'varchar'
                    },
                    {
                        name: 'cargo',
                        type: 'varchar'
                    },
                    {
                        name: 'departamento',
                        type: 'varchar'
                    },
                    {
                        name: 'alarm_id',
                        type: 'int'
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
            queryRunner.dropTable('tb_usuario');
        });
    }
}
exports.CreatetbUsuario1646420043582 = CreatetbUsuario1646420043582;
