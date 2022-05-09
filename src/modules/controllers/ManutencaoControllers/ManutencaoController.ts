import { Request, Response } from 'express';
import CreateManuntencoesServices from '../../services/Manuntencoes/Manutencao/CreateManuntencoesServices';
import UpdateManuntencoesServices from '../../services/Manuntencoes/Manutencao/UpdateManuntencoesServices';
import LoadSummyService  from '../../services/Manuntencoes/Manutencao_View/LoadSummyService';
import DeleteManuntencoesServices from '../../services/Manuntencoes/Manutencao/DeleteManuntencoesServices';




export default class ManutencaoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {cod_manutencao_uuid,descricao,valor,cod_manutencao} = request.body;

        const service = new CreateManuntencoesServices();

        const result = await service.create(
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

        await deleteAtividade.delete({cod_manutencao_uuid});

        return response.json('Delete realizado com sucesso');
      }


    
  }




