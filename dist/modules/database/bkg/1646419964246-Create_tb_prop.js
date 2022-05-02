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
exports.CreatetbProp1646419964246 = void 0;
const typeorm_1 = require("typeorm");
class CreatetbProp1646419964246 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'tb_prop',
                columns: [
                    {
                        name: 'cod_prop',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'data',
                        type: 'date'
                    },
                    {
                        name: 'numero',
                        type: 'int'
                    },
                    {
                        name: 'ano',
                        type: 'varchar'
                    },
                    {
                        name: 'proposta',
                        type: 'int'
                    },
                    {
                        name: 'cliente',
                        type: 'date'
                    },
                    {
                        name: 'cli_contato',
                        type: 'varchar'
                    },
                    {
                        name: 'responsavel',
                        type: 'varchar'
                    },
                    {
                        name: 'departamento',
                        type: 'varchar'
                    },
                    {
                        name: 'status',
                        type: 'varchar'
                    },
                    {
                        name: 'empresa',
                        type: 'varchar'
                    },
                    {
                        name: 'valor',
                        type: 'varchar'
                    },
                    {
                        name: 'dt_aprov',
                        type: 'date'
                    },
                    {
                        name: 'prop_url',
                        type: 'varchar'
                    },
                    {
                        name: 'pasta',
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
            queryRunner.dropTable('tb_prop');
        });
    }
}
exports.CreatetbProp1646419964246 = CreatetbProp1646419964246;
