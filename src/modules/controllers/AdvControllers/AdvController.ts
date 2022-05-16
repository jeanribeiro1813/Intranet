import { Request, Response } from 'express';
import CreateAdvServices from '../../services/Adv/Adv/CreateAdvServices';
import UpdateAdvServices from '../../services/Adv/Adv/UpdateAdvServices';
import DeleteAdvServices from '../../services/Adv/Adv/DeleteAdvServices';
import LoadSummyService from '../../services/Adv/Adv_View/LoadSummyService';
import LoadIndexService from '../../services/Adv/Adv_View/LoadIndexService'
import { container } from "tsyringe";





export default class AtividadeController {


  public async summary(request:Request, response:Response):Promise<Response>{

    const Atividade = container.resolve(LoadSummyService)

    const result = await Atividade.summary();

    return response.json(result);
  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {codadv,cod_page,desc_adv ,cod_adv} = request.body;

       const service = container.resolve(CreateAdvServices)

        const result = await service.create(
          {
            codadv,cod_page,desc_adv ,cod_adv              

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {codadv} = request.params

        const {cod_page,desc_adv ,cod_adv} = request.body

        const updateFatu = container.resolve(UpdateAdvServices);

        const fatura = await updateFatu.update(

          {
            codadv,cod_page,desc_adv ,cod_adv
          }

        )

        return response.json(fatura);



      }
    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {codadv} = request.params;

        const deleteAtividade = container.resolve(DeleteAdvServices);

       await deleteAtividade.delete({codadv});

        return response.json('Delete realizado com sucesso');
      }
    
      public async index(request:Request, response:Response):Promise<Response>{

        const {codadv} = request.params;

        const deleteAtividade = container.resolve(LoadIndexService);

       await deleteAtividade.index({codadv});

        return response.json('Delete realizado com sucesso');
      }


    
  }




