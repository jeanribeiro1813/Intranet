import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbDocsExt1646419868613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_docs_ext',
                columns :[
                    {
                        name:'cod_ext',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'url_ext',
                        type:'varchar'
                    },

                    {
                        name: 'dt_aprv',
                        type: 'date'
                    },
					
					{
                        name: 'dt_rev',
                        type: 'date'
                    },
					
					{
                        name: 'status',
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
            })
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('tb_docs_ext')
    }

}
