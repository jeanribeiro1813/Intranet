import { Request, Response } from 'express';
import LoadCargoByIdService from '../services/Cargo/LoadByIdService';
import LoadCargoDescPontos from '../services/Cargo/LoadDescPontos';
import UpCargoByidServive from '../services/Cargo/UpCargosByIdService';
import Cargo from '../typeorm/entities/Cargo';
import CreateCargoServicer from '../services/Cargo/CreateCargoServices';
import { getRepository } from "typeorm";




export default class CargoController {

  public async loadById(request: Request, response: Response): Promise<Response> {

    const {id} = request.body;

    const loadCargoById = new LoadCargoByIdService();

    const funcao = await loadCargoById.execute({id});

    return response.json(funcao);
  }

  public async upById (request: Request , response: Response){

    const {id} = request.params;

    //Organizado em Ordem para fazer o update

    const{name,email,password} = request.body;

    const UpdateService = new UpCargoByidServive;

    const funcao = await UpdateService.saved(
      {id,
       name,
       email,
      password}
      );

    return response.json(funcao);


  }

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadCargoDescPontos();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Cargo
      public async create(request: Request, response: Response){

        const {name, email,password} = request.body;
        
        const createCargo = new CreateCargoServicer();
  
        const user = await createCargo.execute(
          { 
            name,
            email,
            password
          }
        );
        
        return response.json(user);
      }


      //Detelete Usuario
      public async delete(request: Request, response: Response){

        const repositories = getRepository(Cargo);
      
        const {name} = request.params;
   
        const cargoExist = await repositories.findOne({where:{name}});
   
        if(cargoExist){
          return response.status(404).json('Não existe esse usuario');
        }
  
        await repositories.delete(name);
   
        return response.json("Delete feito");
  
  }

}



