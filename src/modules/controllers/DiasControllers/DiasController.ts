import { Request, Response } from 'express';
import CreateDiasServices from '../../services/Dias/Dias/CreateDiasServices';
import UpdateDiasServices from '../../services/Dias/Dias/UpdateDiasServices';
import DeleteDiasServices from '../../services/Dias/Dias/DeleteDiasServices';
import LoadSummyService from '../../services/Dias/Dias_View/LoadSummyService';
import LoadFilterServices from '../../services/Dias/Dias_View/LoadFilterServices';
import LoadIndexService from '../../services/Dias/Dias_View/LoadIndexService';







export default class DiasController {


  public async summary(request:Request, response:Response):Promise<Response>{

    const Atividade = new LoadSummyService();

    const result = await Atividade.executeDes();

    return response.json(result);
  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{
        
        const {uuiddiasuteis,ano,mes ,codigo,dias} = request.body;

        const service = new CreateDiasServices();

        const result = await service.create(
          {
            uuiddiasuteis,ano,mes ,codigo,dias             

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuiddiasuteis} = request.params

        const {ano,mes ,codigo,dias} = request.body

        const updateFatu = new UpdateDiasServices();

        const fatura = await updateFatu.update(

          {
            uuiddiasuteis,ano,mes ,codigo,dias             
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuiddiasuteis} = request.params;

        const deleteAtividade = new DeleteDiasServices();

        await deleteAtividade.delete({uuiddiasuteis});

        return response.json('Delete realizado com sucesso');
      }

      public async filter(request:Request, response:Response):Promise<Response>{

        const {ano, mes} = request.body;

        const resultfilter = new LoadFilterServices();

        const filtro = await resultfilter.filter({ano,mes});

        return response.json(filtro);
      }

      public async index(request:Request, response:Response):Promise<Response>{

        const {uuiddiasuteis} = request.params;

        const resultIndex = new LoadIndexService();

        const result = await resultIndex.index({uuiddiasuteis});

        return response.json(result);
      }

    
  }




