import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbComp1646419855624 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_comp',
                columns :[
                    {
                        name:'cod_comp',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'nome_computador',
                        type:'varchar'
                    },

                    {
                        name: 'arquitetura',
                        type: 'varchar'
                    },
					
					{
                        name: 'so',
                        type: 'varchar'
                    },
					
					{
                        name: 'localuser',
                        type: 'varchar'
                    },
					
					{
                        name: 'servicetag',
                        type: 'varchar'
                    },
					
					{
                        name: 'responsavel',
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
            })
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('tb_comp')
    }

}
