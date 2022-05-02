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
exports.CreateUserTokens1647865493490 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTokens1647865493490 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'user_tokens',
                columns: [
                    //Criando um id e chave primaria que é padrão de qualquer banco de dados
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    //Criando uma coluna token que vai receber um hash também 
                    {
                        name: 'token',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    //Aqui é uma coluna que vai ser uma chave estrangeira pegando da tabela de usuario e da coluna id
                    {
                        name: 'user_id',
                        type: 'uuid',
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
                ],
                /*Criando uma chave estrangeira
                 1° passando o nome de como vai chamar
                 2° Pegando qual a tabela de referencia
                 3° Pegando a coluna de referencia
                 4° Pegando a coluna que vai receber a os dados da outra coluna
                 5° e 6° Fazendo update e delete no modo CASCADE no qual vai fazer para todos */
                foreignKeys: [
                    {
                        name: 'TokenUser',
                        referencedTableName: 'tb_usuario',
                        referencedColumnNames: ['uuidusuario'],
                        columnNames: ['user_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.dropTable('user_tokens');
        });
    }
}
exports.CreateUserTokens1647865493490 = CreateUserTokens1647865493490;
