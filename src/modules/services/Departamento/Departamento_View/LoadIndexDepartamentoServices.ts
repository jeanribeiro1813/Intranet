import { getCustomRepository } from "typeorm";
import Departamento from '../../../../shared/infra/typeorm/entities/Departamento'
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import AppError from "../../../../shared/errors/AppErrors";


interface IRequestDTO{

    uuiddeparta:string;
}

class LoadIndexDepartamento{
    public async index ({uuiddeparta}:IRequestDTO): Promise<Departamento | AppError> {

        const DepartamentorRepository = getCustomRepository(DepartamentoRepository);

        const departamento = await DepartamentorRepository.findById(uuiddeparta);

        if(!departamento){
            throw new AppError('Departamento não encontrado',409)
        }

        return departamento;
    }
}

export default LoadIndexDepartamento;
