import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTBDiasUteis1651608590227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                   name: 'tb_dias_uteis',
                    columns :[
                        {
                          name:'uuiddiasuteis',
                          type: 'uuid',
                          isPrimary: true,
                          generationStrategy: 'uuid',
                          default: 'uuid_generate_v4()'
                         },
            
                        {
                            name:'ano',
                            type: 'text'
                        },
            
                        {
                            name:'mes',
                            type:'text'
                        },
            
                        {
                            name: 'codigo',
                            type: 'text'
                        },
                        {
                            name: 'dias',
                            type: 'text'
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

        queryRunner.dropTable('tb_dias_uteis')
    }

}