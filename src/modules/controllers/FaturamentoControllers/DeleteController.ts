import DeleteServices from "../../services/Faturamento/DeleteServices";
import { Request, Response } from 'express';
import AppError from "../../../shared/errors/AppErrors";




export default class DeleteControllerService {

public async delete(request: Request, response: Response){

const { cod_fat } = request.params;

const service = new DeleteServices();

const result = await service.execute(cod_fat);


if(result instanceof AppError){
    return response.status(400).json('Não Existe')
}

return response.json(`Delete realizado com Sucesso`);

}
}
