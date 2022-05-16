import { getCustomRepository } from "typeorm";
import Departamento from '../../../../shared/infra/typeorm/entities/Departamento'
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

    uuiddeparta:string;
}


@injectable()
  class LoadIndexDepartamento {
  
    constructor(
      @inject('DepartamentoRepository')
      private departamentoRepository: DepartamentoRepository){
      
    }

    public async index ({uuiddeparta}:IRequestDTO): Promise<Departamento | AppError> {

        const departamento = await this.departamentoRepository.findById(uuiddeparta);

        if(!departamento){
            throw new AppError('Departamento não encontrado',409)
        }

        return departamento;
    }
}

export default LoadIndexDepartamento;
