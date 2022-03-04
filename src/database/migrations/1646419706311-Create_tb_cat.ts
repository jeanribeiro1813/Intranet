import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbCat1646419706311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_cat',
                columns :[
                    {
                        name:'cod_cat',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
					
					{
                        name:'cod',
                        type:'varchar'
                    },
					
					{
                        name:'nome_profissional',
                        type:'varchar'
                    },
					
					{
                        name:'profissao',
                        type:'varchar'
                    },
					
					{
                        name:'empresa',
                        type:'varchar'
                    },
					
					{
                        name:'cliente',
                        type:'varchar'
                    },
                  
                    {
                        name:'n_projeto',
                        type:'varchar'
                    },
					
					{
                        name:'atividade_tecnica',
                        type:'varchar'
                    },
					
					{
                        name:'titulo_projeto',
                        type:'varchar'
                    },
					
					{
                        name:'area_atuacao1',
                        type:'varchar'
                    },
					
					{
                        name:'area_atuacao2',
                        type:'varchar'
                    },

                    {
                        name: 'equipe_relac_cat',
                        type: 'varchar'
                    },
					
					{
                        name: 'etapa_trabalho',
                        type: 'varchar'
                    },
					
					{
                        name: 'dt_cat',
                        type: 'date'
                    },
					
					{
                        name: 'dt_inicio_trab',
                        type: 'date'
                    },
					
					{
                        name: 'dt_fim_trab',
                        type: 'date'
                    },
					
					{
                        name: 'tempo_execucao',
                        type: 'varchar'
                    },
					
					{
                        name: 'valor',
                        type: 'varchar'
                    },
					
					{
                        name: 'cat_url',
                        type: 'varchar'
                    },
					
					{
                        name: 'ativado',
                        type: 'boolean'
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

            })

         )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
