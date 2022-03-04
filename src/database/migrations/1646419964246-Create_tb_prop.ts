import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbProp1646419964246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                   name: 'tb_prop',
                    columns :[
                        {
                          name:'cod_prop',
                          type: 'uuid',
                          isPrimary: true,
                          generationStrategy: 'uuid',
                          default: 'uuid_generate_v4()'
                         },
            
                        {
                            name:'data',
                            type:'date'
                        },
            
                        {
                            name:'numero',
                            type:'int'
                        },
            
                        {
                            name: 'ano',
                            type: 'varchar'
                        },
            
                        {
                            name:'proposta',
                            type:'int'
                        },
            
                        {
                            name:'cliente',
                            type:'date'
                        },
            
                        {
                            name:'cli_contato',
                            type:'varchar'
                        },
            
                        {
                            name:'responsavel',
                            type:'varchar'
                        },
            
                        {
                            name:'departamento',
                            type:'varchar'
                        },
                        {
                            name:'status',
                            type:'varchar'
            
                        },
            
                        {
                            name:'empresa',
                            type:'varchar'
                        },
                        {
                            name:'valor',
                            type:'varchar'
                        },
                        
                        {
                            name:'dt_aprov',
                            type:'date'
                        },
            
                        {
                            name:'prop_url',
                            type:'varchar'
                        },
                        
                        {
                            name:'pasta',
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
            
                    ],
                            foreignKeys:[]
            
                }  )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
