import {MigrationInterface, QueryRunner, Table}from "typeorm";

export class CreatetbCarro1646419661103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_carro',
                columns :[
                    {
                        name:'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
					
					{
                        name:'placa',
                        type:'varchar'
                    },
					
					{
                        name:'carro',
                        type:'varchar'
                    },
                  
                    {
                        name:'ano',
                        type:'integer'
                    },
					
					{
                        name:'cor',
                        type:'varchar'
                    },
					
					{
                        name:'km',
                        type:'double'
                    },
					
					{
                        name:'ativo',
                        type:'integer'
                    },

                    {
                        name: 'garagem',
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

                ],
                foreignKeys:[]

                })

            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
