import { Request, Response } from 'express';
import CreateCarrosServices from '../../services/Carros/Carros/CreateCarrosServices';
import UpdateCarrosServices from '../../services/Carros/Carros/UpdateCarrosServices';
import LoadSummyService  from '../../services/Carros/Carros View/LoadSummyService';
import DeleteCarrosServices from '../../services/Carros/Carros/DeleteCarrosServices';




export default class CargoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Carros
      public async create(request: Request, response: Response): Promise<Response>{

        const {id_uuid,placa, carro,ano,cor, km,ativo,garagem,id} = request.body;

        const service = new CreateCarrosServices();

        const result = await service.execute(
          {
            id_uuid,placa, carro,ano,cor, km,ativo,garagem,id
                

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {id_uuid} = request.params

        const { placa, carro,ano,cor, km,ativo,garagem,id} = request.body

        const updateCarros = new UpdateCarrosServices();

        const cargo = await updateCarros.update(

          {
            id_uuid,placa, carro,ano,cor, km,ativo,garagem,id
          }

        )

        return response.json(cargo);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {id_uuid} = request.params;

        const deleteCargo = new DeleteCarrosServices();

       deleteCargo.execute({id_uuid});

        return response.json('Delete realizado com sucesso');
      }


    
  }




