import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbManutencoes1646419940044 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_manutencoes',
                columns :[
                    {
                        name:'cod_manutencao',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'descricao',
                        type:'text'
                    },

                    {
                        name: 'valor',
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

                ],
                foreignKeys:[]

            })
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
