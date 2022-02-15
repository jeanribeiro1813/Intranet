import { getCustomRepository } from 'typeorm'
import CargoRepository from '../../typeorm/repositories/CargoRepository'
import Cargo from '../../typeorm/entities/Cargo'
import AppError from '../../Error/AppError';




interface IRequestDTO {
    id: string;
    name:string;
    email:string;
    password:string;

  


}

//Organizado em Ordem para fazer o update
class UpCargoByIdService{
    public async saved ({id,name,email,password}:IRequestDTO): Promise<Cargo | undefined>{
        

        const cargorepository = getCustomRepository(CargoRepository);

        const pilow = await cargorepository.findOne(id);

        if(!pilow){
            
            throw new AppError('Não existe '); 
        }

        pilow.name = name ? name : pilow.name;
        pilow.email = email ? email : pilow.email;
        pilow.password = password ? password : pilow.password;
        

        
        await cargorepository.save(pilow);

        return pilow;
        
     
    }

}


export default UpCargoByIdService;

