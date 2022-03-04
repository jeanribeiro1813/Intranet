import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbFunc1646419895122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_func',
                columns :[
                    {
                        name:'cod_func',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'cod_cargo',
                        type:'int'
                    },

                    {
                        name: 'cod_usuario',
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

                ],
                foreignKeys:[]

            })
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
