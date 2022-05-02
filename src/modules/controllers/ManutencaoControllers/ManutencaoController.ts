import { Request, Response } from 'express';
import CreateManuntencoesServices from '../../services/Manuntencoes/CreateManuntencoesServices';
import UpdateManuntencoesServices from '../../services/Manuntencoes/UpdateManuntencoesServices';
import LoadSummyService  from '../../services/Manuntencoes/LoadSummyService';
import DeleteManuntencoesServices from '../../services/Manuntencoes/DeleteManuntencoesServices';




export default class ManutencaoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {cod_manutencao_uuid,descricao,valor,cod_manutencao} = request.body;

        const service = new CreateManuntencoesServices();

        const result = await service.execute(
          {
            cod_manutencao_uuid,descricao,valor,cod_manutencao
          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json('Manutenção criado com sucesso');
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {cod_manutencao_uuid} = request.params

        const {descricao,valor,cod_manutencao} = request.body

        const updateFatu = new UpdateManuntencoesServices();

        const fatura = await updateFatu.update(

          {
            cod_manutencao_uuid,descricao,valor,cod_manutencao
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {cod_manutencao_uuid} = request.params;

        const deleteAtividade = new DeleteManuntencoesServices();

       deleteAtividade.execute({cod_manutencao_uuid});

        return response.json('Delete realizado com sucesso');
      }


    
  }




