import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbEqpt1646419878924 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_eqpt',
                columns :[
                    {
                        name:'cod_equipam',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'grupo',
                        type:'varchar'
                    },

                    {
                        name: 'cod_equipa',
                        type: 'varchar'
                    },
					
					{
                        name: 'nome_equipa',
                        type: 'varchar'
                    },
					
					{
                        name: 'val_garantia',
                        type: 'date'
                    },
					
					{
                        name: 'fornec_equipa',
                        type: 'varchar'
                    },
					
					{
                        name: 'up_nfiscal',
                        type: 'varchar'
                    },
					
					{
                        name: 'up_cert_calib',
                        type: 'varchar'
                    },	
					
					{
                        name: 'localizacao',
                        type: 'varchar'
                    },
					
					{
                        name: 'descricao',
                        type: 'varchar'
                    },	
					
					{
                        name: 'observacao',
                        type: 'varchar'
                    },	
					
					{
                        name: 'status',
                        type: 'boolean'
                    },
					
					{
                        name: 'marca',
                        type: 'varchar'
                    },
					
					{
                        name: 'modelo',
                        type: 'varchar'
                    },
										
					{
                        name: 'ult_calib',
                        type: 'date'
                    },
					
					{
                        name: 'venc_calib',
                        type: 'date'
                    },
					
					{
                        name: 'historico',
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
        queryRunner.dropTable('tb_eqpt')
    }

}
