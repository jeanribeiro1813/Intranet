import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbGanttEtapas1646419924029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_gantt_etapas',
                columns :[
                    {
                        name:'cod_etapa',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
					
					{
                        name:'cod_item',
                        type:'varchar'
                    },
					
					{
                        name: 'dt_inicio',
                        type: 'date'
                    },	
					
					{
                        name: 'dt_fim',
                        type: 'date'
                    },
					
					{
                        name:'descricao',
                        type:'varchar'
                    },
					
					{
                        name:'responsavel',
                        type:'int'
                    },
					
					{
                        name:'verificacao',
                        type:'varchar'
                    },
					
					{
                        name: 'dt_verificacao',
                        type: 'date'
                    },
					
					{
                        name:'ver_user',
                        type:'int'
                    },
					
					{
                        name:'analise',
                        type:'text'
                    },
					
					{
                        name: 'dt_analise',
                        type: 'date'
                    },
                  
                    {
                        name:'analise_user',
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
            })
            
        )            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('tb_gantt_etapas')
    }

}
