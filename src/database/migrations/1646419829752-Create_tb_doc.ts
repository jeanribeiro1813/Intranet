import {MigrationInterface, QueryRunner, Table}from "typeorm";

export class CreatetbDoc1646419829752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_doc',
                columns :[
                    {
                        name:'cod_doc',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
					
					{
                        name:'doc_title',
                        type:'varchar'
                    },
					
					{
                        name:'dt_envio',
                        type:'date'
                    },

					{
                        name:'doc_projs',
                        type:'varchar'
                    },
					
					{
                        name:'status',
                        type:'boolean'
                    },
					
					{
                        name:'doc_origem',
                        type:'varchar'
                    },
					
					{
                        name:'dt_valid',
                        type:'date'
                    },
					
					{
                        name:'doc_resp',
                        type:'int'
                    },
					
					{
                        name:'not_mail',
                        type:'varchar'
                    },
					
					{
                        name:'tipo_modelo',
                        type:'varchar'
                    },
					
					{
                        name:'doc_url',
                        type:'varchar'
                    },
					
					{
                        name:'newdline',
                        type:'int'
                    },
					
					{
                        name:'rqrmts',
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

            })
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
