import { Request, Response } from 'express';
import FilterServices from '../../services/Users/views/FilterServices';

export default class UsersControllers {

  public async filter (request: Request , response: Response){

    const {status} = request.body;

    const loadingService = new FilterServices();

    const result = await loadingService.filterService({status});


    return response.json(result);

  }  

}




