import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbEqptRes1646419886425 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_eqpt_res',
                columns :[
                    {
                        name:'cod_eqpt_res',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'cod_equipam',
                        type:'int'
                    },

                    {
                        name: 'cod_reserva',
                        type: 'int'
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
        queryRunner.dropTable('tb_eqpt_res')
    }

}
