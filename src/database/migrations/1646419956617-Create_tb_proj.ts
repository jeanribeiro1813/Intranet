import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbProj1646419956617 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                   name: 'tb_proj',
                    columns :[
                        {
                          name:'cod_proj',
                          type: 'uuid',
                          isPrimary: true,
                          generationStrategy: 'uuid',
                          default: 'uuid_generate_v4()'
                         },
            
                        {
                            name:'data',
                            type: 'date'
                        },
            
                        {
                            name:'contrato',
                            type:'int'
                        },
            
                        {
                            name: 'co',
                            type: 'varchar'
                        },
            
                        {
                            name:'projeto',
                            type:'varchar'
                        },
            
                        {
                            name:'cliente',
                            type:'varchar'
                        },
            
                        {
                            name:'cliente2',
                            type:'varchar'
                        },
            
                        {
                            name:'numero',
                            type:'varchar'
                        },
            
                        {
                            name:'gerente',
                            type:'varchar'
                        },
                        {
                            name:'coordenador',
                            type:'varchar'
            
                        },
            
                        {
                            name:'equipe',
                            type:'text'
                        },
                        {
                            name:'status',
                            type:'varchar'
                        },
                        
                        {
                            name:'proposta',
                            type:'varchar'
                        },
            
                        {
                            name:'departamento',
                            type:'varchar'
                        },
                        
                        {
                            name:'previsao',
                            type:'dete'
                        },
            
                         {
                            name:'nproc_origem',
                            type:'varchar'
                        },
            
                         {
                            name:'valor',
                            type:'varchar'
                        },
            
                         {
                            name:'memoalt',
                            type:'mediumtext'
                        },
            
                         {
                            name:'dt_fim',
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
