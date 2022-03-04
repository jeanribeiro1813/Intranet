import { Request, Response } from 'express';
import LoadCargoService from '../services/Cargo/LoadCargoServices';
import CreateCargoServicer from '../services/Cargo/CreateCargoServices';
import UpdateCargoServes from '../services/Cargo/UpdateCargoServices';
import { getRepository } from "typeorm";
import Cargo from '../typeorm/entities/Cargo';




export default class CargoController {


  
      //Criação Cargo
      public async create(request: Request, response: Response){

        const {name, email,password} = request.body;
        
        const service = new CreateCargoServicer();
  
        const result = await service.execute(
          { 
            name,
            email,
            password
          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }
        
        return response.json(result);
      }

      //Loading

      public async loading (request: Request , response: Response){

        const loadingService = new LoadCargoService;

        const result = await loadingService.load();

        return response.json(result);

      }

      //Delete

      public async delete(request: Request, response: Response){

        const repositories = getRepository(Cargo);
      
        const {nombre} = request.params;
   
        const userExist = await repositories.findOne({where:{nombre}});
   
        if(userExist){
          return response.status(404).json('Não existe esse usuario');
        }
  
        await repositories.delete(nombre);
   
        return response.json("Delete feito");
  
  
  
      }

      // Upgrade 

      public async update (request :Request, response:Response){

        const {id , name , email , password} = request.body

        const updateCargo = new UpdateCargoServes;

        const cargo = await updateCargo.update(

          {
            id,name ,email , password
          }

        )

        return response.json(cargo);



      }
  }




