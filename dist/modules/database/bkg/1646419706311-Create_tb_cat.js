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
exports.CreatetbCat1646419706311 = void 0;
const typeorm_1 = require("typeorm");
class CreatetbCat1646419706311 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'tb_cat',
                columns: [
                    {
                        name: 'cod_cat',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'cod',
                        type: 'varchar'
                    },
                    {
                        name: 'nome_profissional',
                        type: 'varchar'
                    },
                    {
                        name: 'profissao',
                        type: 'varchar'
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
                        name: 'n_projeto',
                        type: 'varchar'
                    },
                    {
                        name: 'atividade_tecnica',
                        type: 'varchar'
                    },
                    {
                        name: 'titulo_projeto',
                        type: 'varchar'
                    },
                    {
                        name: 'area_atuacao1',
                        type: 'varchar'
                    },
                    {
                        name: 'area_atuacao2',
                        type: 'varchar'
                    },
                    {
                        name: 'equipe_relac_cat',
                        type: 'varchar'
                    },
                    {
                        name: 'etapa_trabalho',
                        type: 'varchar'
                    },
                    {
                        name: 'dt_cat',
                        type: 'date'
                    },
                    {
                        name: 'dt_inicio_trab',
                        type: 'date'
                    },
                    {
                        name: 'dt_fim_trab',
                        type: 'date'
                    },
                    {
                        name: 'tempo_execucao',
                        type: 'varchar'
                    },
                    {
                        name: 'valor',
                        type: 'varchar'
                    },
                    {
                        name: 'cat_url',
                        type: 'varchar'
                    },
                    {
                        name: 'ativado',
                        type: 'boolean'
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
            queryRunner.dropTable('tb_cat');
        });
    }
}
exports.CreatetbCat1646419706311 = CreatetbCat1646419706311;
