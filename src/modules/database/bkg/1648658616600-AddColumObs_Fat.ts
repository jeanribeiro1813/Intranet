import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class AddColumObsFat1648658616600 implements MigrationInterface {
    name = 'AddColumObsFat1648658616600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tb_fat', new TableColumn({
            name: 'obs',
            type: 'varchar',
            isNullable: true,
        }));
       
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('obs','tb_fat');
     }

}
