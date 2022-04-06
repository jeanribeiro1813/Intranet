import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbChamado1646419847321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_chamado',
                columns :[
                    {
                        name:'cod_chamado',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'cod_usuario',
                        type:'integer'
                    },

                    {
                        name: 'equipamento',
                        type: 'varchar'
                    },
					
					{
                        name: 'descricao',
                        type: 'varchar'
                    },
					
					{
                        name: 'prioridade',
                        type: 'varchar'
                    },
					
					{
                        name: 'dt_solicitacao',
                        type: 'date'
                    },
					
					{
                        name: 'dt_conclusao',
                        type: 'date'
                    },
					
					{
                        name: 'desc_conclusao',
                        type: 'varchar'
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

        queryRunner.dropTable('tb_chamado')
    }

}
