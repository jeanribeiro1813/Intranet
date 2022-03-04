import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbPagina1646419949116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_pagina',
                columns :[
                    {
                        name:'cod_page',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'pagina',
                        type:'varchar'
                    },

                    {
                        name: 'descricao',
                        type: 'varchar'
                    },
					
					{
                        name: 'banner',
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

                ],
                foreignKeys:[]

            })
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
