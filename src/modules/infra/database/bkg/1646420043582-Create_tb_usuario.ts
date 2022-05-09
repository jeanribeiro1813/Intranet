import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbUsuario1646420043582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                   name: 'tb_usuario',
                    columns :[
                        {
                          name:'cod_usuario',
                          type: 'uuid',
                          isPrimary: true,
                          generationStrategy: 'uuid',
                          default: 'uuid_generate_v4()'
                         },
            
                        {
                            name:'login',
                            type: 'varchar'
                        },
            
                        {
                            name:'senha',
                            type:'varchar'
                        },
            
                        {
                            name: 'nome_usuario',
                            type: 'varchar'
                        },
            
                        {
                            name:'n_cnh',
                            type:'int'
                        },
            
                        {
                            name:'dt_validade',
                            type:'date'
                        },
            
                        {
                            name:'email',
                            type:'varchar'
                        },
            
                        {
                            name:'ramal',
                            type:'int'
                        },
            
                        {
                            name:'status',
                            type:'varchar'
                        },
                        {
                            name:'h_status',
                            type:'varchar'
            
                        },
            
                        {
                            name:'last_log',
                            type:'timestamp'
                        },
                        {
                            name:'log_time',
                            type:'timestamp'
                        },
                        
                        {
                            name:'dt_nasc',
                            type:'date'
                        },
            
                        {
                            name:'contato',
                            type:'varchar'
                        },
                        
                        {
                            name:'contato2',
                            type:'varchar'
                        },
            
                         {
                            name:'cargo',
                            type:'varchar'
                        },
            
                         {
                            name:'departamento',
                            type:'varchar'
                        },
            
                         {
                            name:'alarm_id',
                            type:'int'
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

        queryRunner.dropTable('tb_usuario')
    }

}
