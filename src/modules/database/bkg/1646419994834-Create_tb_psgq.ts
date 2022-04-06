import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbPsgq1646419994834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                   name: 'tb_psgq',
                    columns :[
                        {
                          name:'cod_sgq',
                          type: 'uuid',
                          isPrimary: true,
                          generationStrategy: 'uuid',
                          default: 'uuid_generate_v4()'
                         },
            
                        {
                            name:'type',
                            type: 'varchar'
                        },
            
                        {
                            name:'url',
                            type:'varchar'
                        },
            
                        {
                            name: 'n_rev',
                            type: 'int'
                        },
            
                        {
                            name:'dt_vigor',
                            type:'date'
                        },
            
                        {
                            name:'dt_rev',
                            type:'date'
                        },
            
                        {
                            name:'dt_envio',
                            type:'date'
                        },
            
                        {
                            name:'status',
                            type:'int'
                        },
            
                        {
                            name:'dt_revog',
                            type:'date'
                        },
                        {
                            name:'local_armazenamento',
                            type:'varchar'
            
                        },
            
                        {
                            name:'protecao',
                            type:'varchar'
                        },
                        {
                            name:'recuperacao',
                            type:'varchar'
                        },
                        
                        {
                            name:'retencao',
                            type:'varchar'
                        },
            
                        {
                            name:'disposicao',
                            type:'varchar'
                        },
                        
                        {
                            name:'ref_psgq',
                            type:'varchar'
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

        queryRunner.dropTable('tb_psgq')
    }

}
