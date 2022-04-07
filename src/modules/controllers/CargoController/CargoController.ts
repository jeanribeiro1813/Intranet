import { Request, Response } from 'express';
import CreateCargoServicer from '../../services/Cargo/CreateCargoServices';
import UpdateCargoServes from '../../services/Cargo/UpdateCargoServices';
import LoadSummyService  from '../../services/Cargo/LoadSummyService';
import DeleteCargoService from '@modules/services/Cargo/DeleteCargoServices';




export default class CargoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }

      //Criação Cargo
      public async create(request: Request, response: Response): Promise<Response>{

        const { uuidcargo,desc_cargo,cod_cargo} = request.body;

        const service = new CreateCargoServicer();

        const result = await service.execute(
          {
            uuidcargo,desc_cargo,cod_cargo
                

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuidcargo} = request.params

        const {desc_cargo,cod_cargo} = request.body

        const updateFatu = new UpdateCargoServes();

        const fatura = await updateFatu.update(

          {
            uuidcargo,desc_cargo,cod_cargo
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidcargo} = request.params;

        const deleteCargo = new DeleteCargoService();

       deleteCargo.execute({uuidcargo});

        return response.json('Delete realizado com sucesso');
      }


    
  }



