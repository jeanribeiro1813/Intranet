import { Request, Response } from 'express';
import CreateAdvServices from '../../services/Adv/Adv/CreateAdvServices';
import UpdateAdvServices from '../../services/Adv/Adv/UpdateAdvServices';
import DeleteAdvServices from '../../services/Adv/Adv/DeleteAdvServices';






export default class AtividadeController {

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {codadv,cod_page,desc_adv ,cod_adv} = request.body;

        const service = new CreateAdvServices();

        const result = await service.execute(
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

        const updateFatu = new UpdateAdvServices();

        const fatura = await updateFatu.update(

          {
            codadv,cod_page,desc_adv ,cod_adv
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {codadv} = request.params;

        const deleteAtividade = new DeleteAdvServices();

       deleteAtividade.execute({codadv});

        return response.json('Delete realizado com sucesso');
      }


    
  }




