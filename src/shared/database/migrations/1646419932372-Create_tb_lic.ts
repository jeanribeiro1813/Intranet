import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatetbLic1646419932372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                name: 'tb_lic',
                columns :[
                    {
                        name:'cod_lic',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                  
                    {
                        name:'n_regea_pangea',
                        type:'varchar'
                    },
					
					{
                        name:'objeto_proposta',
                        type:'varchar'
                    },

                    {
                        name: 'status_certame',
                        type: 'enum',
						enum: ['Ativo','Encerrado','Suspenso',
						'Adiado','Aguardando resultado',
						'Aguardando edital','Declinamos']
                    },
					
                    {
                        name: 'status_interno',
                        type: 'enum',
						enum: ['Aguardando Resultado da Licitação',
						'Avaliação de participação','Não orçado','Orçado',
						'Orçado e enviado','Suspensa','Vencedor','Declinamos',
						'Desclassificado','Perdemos',
						'Certame revogado','Certame fracassado']
                    },	
					
                    {
                        name: 'tipo_lic',
                        type: 'enum',
						enum: ['RDC','CONVITE','PREGAO PRESENCIAL',
						'PREGAO ELETRONICO','TOMADA DE PREÇOS',
						'CONCORRENCIA','CONCORRENCIA INTERNACIONAL','COLETA DE PREÇOS',
						'MANIFESTAÇAO DE INTERESSE','OUTROS']
                    },
					
					{
                        name: 'cliente',
                        type: 'varchar'
                    },
					
					{
                        name: 'prazo_etrg_envelope',
                        type: 'date'
                    },
					
					{
                        name: 'visita_tec_obrigatoria',
                        type: 'boolean'
                    },
					
					{
                        name: 'prof_com_crea',
                        type: 'boolean'
                    },
					
					{
                        name: 'dt_lmt_realizacao',
                        type: 'date'
                    },
										
					{
                        name: 'visita_tec_prof',
                        type: 'varchar'
                    },
					
					{
                        name: 'dt_visita',
                        type: 'date'
                    },	
					
					{
                        name: 'gerente_licitacao',
                        type: 'varchar'
                    },	
					
					{
                        name: 'equipe',
                        type: 'varchar'
                    },	
					
					{
                        name: 'valor_original',
                        type: 'varchar'
                    },
					
					{
                        name: 'valor_regea_pangea',
                        type: 'varchar'
                    },
					
					{
                        name: 'desconto',
                        type: 'varchar'
                    },
					
					{
                        name: 'recursos_agent_finan',
                        type: 'varchar'
                    },
					
					{
                        name: 'agente_tecnico',
                        type: 'varchar'
                    },
					
					{
                        name: 'n_edital',
                        type: 'varchar'
                    },
					
					{
                        name: 'licitante',
                        type: 'varchar'
                    },
					
					{
                        name: 'horario',
                        type: 'varchar'
                    },
					
					{
                        name: 'observacoes',
                        type: 'text'
                    },
					
					{
                        name: 'loc_etrg_envelope',
                        type: 'varchar'
                    },
					
					{
                        name: 'contato',
                        type: 'varchar'
                    },
					
					{
                        name: 'acc_consorcio',
                        type: 'boolean'
                    },	
					
					{
                        name: 'acc_envio_envelope',
                        type: 'boolean'
                    },	
					
					{
                        name: 'dec_ciencia',
                        type: 'boolean'
                    },
					
					{
                        name: 'lic_url',
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
        queryRunner.dropTable('tb_lic')
    }

}
