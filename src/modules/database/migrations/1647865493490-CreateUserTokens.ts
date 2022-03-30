import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateUserTokens1647865493490 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({

               name: 'user_tokens',

                columns :[
                    //Criando um id e chave primaria que é padrão de qualquer banco de dados
                    {
                      name:'id',
                      type: 'uuid',
                      isPrimary: true,
                      generationStrategy: 'uuid',
                      default: 'uuid_generate_v4()'
                     },

                     //Criando uma coluna token que vai receber um hash também 
        
                     {
                        name:'token',
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
                foreignKeys:[
                    {
                        name: 'TokenUser',
                        referencedTableName: 'tb_usuario',
                        referencedColumnNames:['cod_usuario_uuid'],
                        columnNames: ['user_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            }  )
    
    ) }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('user_tokens');
    }

}
