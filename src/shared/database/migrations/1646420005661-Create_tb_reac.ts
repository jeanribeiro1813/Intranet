import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbReac1646420005661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                   name: 'tb_reac',
                    columns :[
                        {
                          name:'cod',
                          type: 'uuid',
                          isPrimary: true,
                          generationStrategy: 'uuid',
                          default: 'uuid_generate_v4()'
                         },
            
                        {
                            name:'numero',
                            type: 'int'
                        },
            
                        {
                            name:'rev',
                            type:'int'
                        },
            
                        {
                            name: 'empresa',
                            type: 'varchar'
                        },
            
                        {
                            name:'cliente',
                            type:'varchar'
                        },
            
                        {
                            name:'cli_cnpj',
                            type:'varchar'
                        },
            
                        {
                            name:'cli_end',
                            type:'varchar'
                        },
            
                        {
                            name:'cli_contato',
                            type:'varchar'
                        },
            
                        {
                            name:'interessado',
                            type:'varchar'
                        },
                        {
                            name:'int_cnpj',
                            type:'varchar'
            
                        },
            
                        {
                            name:'int_end',
                            type:'varchar'
                        },
                        {
                            name:'int_contato',
                            type:'varchar'
                        },
                        
                        {
                            name:'end_amostragem',
                            type:'varchar'
                        },
            
                        {
                            name:'local_amostragem',
                            type:'varchar'
                        },
                        
                        {
                            name:'tecnico_amostragem',
                            type:'varchar'
                        },
            
                         {
                            name:'plano_amostragem',
                            type:'varchar'
                        },
            
                         {
                            name:'url',
                            type:'varchar'
                        },
            
                         {
                            name:'fichas_amostragem',
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
        queryRunner.dropTable('tb_reac')
    }

}
