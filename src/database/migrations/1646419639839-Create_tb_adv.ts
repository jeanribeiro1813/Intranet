import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbAdv1646419639839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_adv',
                columns :[
                    {
                        name:'cod_adv',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'cod_page',
                        type:'int'
                    },

                    {
                        name: 'desc_adv',
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
