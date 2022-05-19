import { Request, Response } from 'express';
import CreateCargoServicer from '../../services/Cargo/Cargo/CreateCargoServices';
import UpdateCargoServes from '../../services/Cargo/Cargo/UpdateCargoServices';
import LoadSummyService  from '../../services/Cargo/Cargo View/LoadSummyService';
import DeleteCargoService from '../../services/Cargo/Cargo/DeleteCargoServices';
import LoadIndexCargoServices from '../../services/Cargo/Cargo View/LoadIndexCargoServices'
import { container } from "tsyringe";




export default class CargoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = container.resolve(LoadSummyService)

    const funcao = await loadFuncao.summary();

    return response.json(funcao);

  }

      //Criação Cargo
      public async create(request: Request, response: Response): Promise<Response>{

        const { uuidcargo,cargo,cod_cargo} = request.body;

        const service = container.resolve(CreateCargoServicer)

        const result = await service.execute(
          {
            uuidcargo,cargo,cod_cargo
                

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

        const {cargo,cod_cargo} = request.body

        const updateFatu = container.resolve(UpdateCargoServes)

        const fatura = await updateFatu.update(

          {
            uuidcargo,cargo,cod_cargo
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidcargo} = request.params;

        const deleteCargo = container.resolve(DeleteCargoService)

        await deleteCargo.delete({uuidcargo});

        return response.json('Delete realizado com sucesso');
      }

      public async index(request:Request, response:Response):Promise<Response>{

        const {uuidcargo} = request.params;

        const Cargo = container.resolve(LoadIndexCargoServices)

       const result = await Cargo.index({uuidcargo});

        return response.json(result);
      }


    
  }




