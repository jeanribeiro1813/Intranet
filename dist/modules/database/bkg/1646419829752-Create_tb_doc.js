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
exports.CreatetbDoc1646419829752 = void 0;
const typeorm_1 = require("typeorm");
class CreatetbDoc1646419829752 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'tb_doc',
                columns: [
                    {
                        name: 'cod_doc',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'doc_title',
                        type: 'varchar'
                    },
                    {
                        name: 'dt_envio',
                        type: 'date'
                    },
                    {
                        name: 'doc_projs',
                        type: 'varchar'
                    },
                    {
                        name: 'status',
                        type: 'boolean'
                    },
                    {
                        name: 'doc_origem',
                        type: 'varchar'
                    },
                    {
                        name: 'dt_valid',
                        type: 'date'
                    },
                    {
                        name: 'doc_resp',
                        type: 'int'
                    },
                    {
                        name: 'not_mail',
                        type: 'varchar'
                    },
                    {
                        name: 'tipo_modelo',
                        type: 'varchar'
                    },
                    {
                        name: 'doc_url',
                        type: 'varchar'
                    },
                    {
                        name: 'newdline',
                        type: 'int'
                    },
                    {
                        name: 'rqrmts',
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
            queryRunner.dropTable('tb_doc');
        });
    }
}
exports.CreatetbDoc1646419829752 = CreatetbDoc1646419829752;
