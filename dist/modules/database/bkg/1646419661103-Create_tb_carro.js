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
exports.CreatetbCarro1646419661103 = void 0;
const typeorm_1 = require("typeorm");
class CreatetbCarro1646419661103 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'tb_carro',
                columns: [
                    {
                        name: 'id',
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
                        name: 'carro',
                        type: 'varchar'
                    },
                    {
                        name: 'ano',
                        type: 'integer'
                    },
                    {
                        name: 'cor',
                        type: 'varchar'
                    },
                    {
                        name: 'km',
                        type: 'varchar'
                    },
                    {
                        name: 'ativo',
                        type: 'integer'
                    },
                    {
                        name: 'garagem',
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
            queryRunner.dropTable('tb_carro');
        });
    }
}
exports.CreatetbCarro1646419661103 = CreatetbCarro1646419661103;
