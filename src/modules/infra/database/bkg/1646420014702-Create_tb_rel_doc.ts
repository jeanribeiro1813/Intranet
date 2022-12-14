import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbRelDoc1646420014702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                   name: 'tb_rel_doc',
                    columns :[
                        {
                          name:'cod',
                          type: 'uuid',
                          isPrimary: true,
                          generationStrategy: 'uuid',
                          default: 'uuid_generate_v4()'
                         },
            
                        {
                            name:'cod_doc',
                            type: 'int'
                        },
            
                        {
                            name:'cod_proc',
                            type:'int'
                        },
            
                        {
                            name: 'tab_proc',
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
            
                    ]
                            
                }  )
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        queryRunner.dropTable('tb_rel_doc')
    }

}
