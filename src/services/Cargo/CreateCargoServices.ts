import { getCustomRepository } from 'typeorm'
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'
import AppErrors from '../../errors/AppErrors';
import BCryptHashProvider from '../../providers/CryptHashB';


interface IRequestDTO {
    name:string;
    email:string;
    password:string;
  }
  
  class CreateCargoService {
  
    public async execute({ name, email, password}: IRequestDTO): Promise<Cargo | Error> {
      
      const usersRepository = getCustomRepository(CargoRepository);

      const hashProvider = new BCryptHashProvider();
        
      const checkUserExists = await usersRepository.findOne({email});
  
      if (checkUserExists) {
        throw new AppErrors('Nome já existe.');

      }

      const hashPassword = await hashProvider.generateHash(password);
  
      const user =  usersRepository.create({
        name,
        email,
        password : hashPassword,
   
      });
      
      await usersRepository.save(user);
  
      return user;
    }
  }
  
  export default CreateCargoService;
  