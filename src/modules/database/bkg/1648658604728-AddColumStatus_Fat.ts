import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class AddColumStatusFat1648658604728 implements MigrationInterface {
    name = 'AddColumStatusFat1648658604728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tb_fat', new TableColumn({
            name: 'status',
            type: 'varchar',
            isNullable: true,
        }))
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('status','tb_fat');
    }

}
