import { Request, Response } from 'express';
import LoadCargoService from '../services/Cargo/LoadCargoServices';
import CreateCargoServicer from '../services/Cargo/CreateCargoServices';
// import { getRepository } from "typeorm";




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

}



