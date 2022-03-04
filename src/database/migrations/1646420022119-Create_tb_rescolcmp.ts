import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbRescolcmp1646420022119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                   name: 'tb_rescolcmp',
                    columns :[
                        {
                          name:'cod_reserva',
                          type: 'uuid',
                          isPrimary: true,
                          generationStrategy: 'uuid',
                          default: 'uuid_generate_v4()'
                         },
            
                        {
                            name:'cod_col',
                            type: 'varchar'
                        },
            
                        {
                            name:'usuario',
                            type:'varchar'
                        },
            
                        {
                            name: 'de_saida',
                            type: 'date'
                        },
            
                        {
                            name:'dt_chegada',
                            type:'date'
                        },
            
                        {
                            name:'hora_saida',
                            type:'time'
                        },
            
                        {
                            name:'hora_chegada',
                            type:'time'
                        },
            
                        {
                            name:'atividade',
                            type:'varchar'
                        },
            
                        {
                            name:'km_chegada',
                            type:'double'
                        },
                        {
                            name:'projeto',
                            type:'varchar'
            
                        },
            
                        {
                            name:'cancelado',
                            type:'tinyint'
                        },
                        {
                            name:'desc_cancel',
                            type:'varchar'
                        },
                        
                        {
                            name:'dt_cancel',
                            type:'timestamp'
                        },
            
                        {
                            name:'dev_obs',
                            type:'mediumtext'
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
