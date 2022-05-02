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
exports.CreatetbChamado1646419847321 = void 0;
const typeorm_1 = require("typeorm");
class CreatetbChamado1646419847321 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'tb_chamado',
                columns: [
                    {
                        name: 'cod_chamado',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'cod_usuario',
                        type: 'integer'
                    },
                    {
                        name: 'equipamento',
                        type: 'varchar'
                    },
                    {
                        name: 'descricao',
                        type: 'varchar'
                    },
                    {
                        name: 'prioridade',
                        type: 'varchar'
                    },
                    {
                        name: 'dt_solicitacao',
                        type: 'date'
                    },
                    {
                        name: 'dt_conclusao',
                        type: 'date'
                    },
                    {
                        name: 'desc_conclusao',
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
            queryRunner.dropTable('tb_chamado');
        });
    }
}
exports.CreatetbChamado1646419847321 = CreatetbChamado1646419847321;
