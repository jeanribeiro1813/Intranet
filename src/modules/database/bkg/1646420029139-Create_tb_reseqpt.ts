import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbReseqpt1646420029139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                   name: 'tb_reseqpt',
                    columns :[
                        {
                          name:'cod_reserva',
                          type: 'uuid',
                          isPrimary: true,
                          generationStrategy: 'uuid',
                          default: 'uuid_generate_v4()'
                         },
            
                        {
                            name:'cod_item',
                            type: 'int'
                        },
            
                        {
                            name:'usuario',
                            type:'varchar'
                        },
            
                        {
                            name: 'dt_saida',
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
                            name:'km_saida',
                            type:'float'
                        },
            
                        {
                            name:'km_chegada',
                            type:'float'
                        },
                        {
                            name:'projeto',
                            type:'varchar'
            
                        },
            
                        {
                            name:'cancelado',
                            type:'bit'
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
                            type:'varchar'
                        },
                        
                        {
                            name:'reparo',
                            type:'bit'
                        },
            
                         {
                            name:'acessorios',
                            type:'bit'
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

        queryRunner.dropTable('tb_reseqpt')
    }

}
