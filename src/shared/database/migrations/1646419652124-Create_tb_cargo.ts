import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbCargo1646419652124 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
            {
            name: 'tb_cargo',
            columns :[
                {
                    name:'cod_adv',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
              
                {
                    name:'cod_cargo',
                    type:'integer'
                },

                {
                    name: 'desc_cargo',
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

        )}

    public async down(queryRunner: QueryRunner): Promise<void> {

        queryRunner.dropTable('tb_cargo')
    }

}
