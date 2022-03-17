import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Users from '../../../modules/typeorm/entities/Users';
import UsersRepository from '../../../modules/typeorm/repositories/UsersRepository'
import { hash } from 'bcryptjs';




interface IRequestDTO {
    login:string ,   
    senha:string ,
    nome_usuario:string ,
    n_cnh:number ,
    dt_validade:string ,
    email:string ,
    ramal:number ,
    status:string ,
    h_status:string ,
    last_log:string ,
    log_time:string ,
    dt_nasc:string ,
    contato:string ,
    contato2:string ,
    cargo:string ,
    departamento:string ,
    alarm_id:number ,
    cod_usuario:number ,
    avatar:string ,
  

  }

  class CreateUsersService {

    public async execute({ 
        login,   
        senha,
        nome_usuario,
        n_cnh,
        dt_validade,
        email,
        ramal,
        status,
        h_status,
        last_log,
        log_time,
        dt_nasc,
        contato,
        contato2,
        cargo,
        departamento,
        alarm_id,
        cod_usuario,
        avatar
    }: IRequestDTO): Promise<Users> {

      const usersRepository = getCustomRepository(UsersRepository);

      const checkUserExists = await usersRepository.findByEmail(email);

      if (checkUserExists) {
        throw new AppError('Email já existe.',404);

      }

      const hashedPassword = await hash(senha, 8);

      const user =  usersRepository.create({
        login,   
        senha: hashedPassword,
        nome_usuario,
        n_cnh,
        dt_validade,
        email,
        ramal,
        status,
        h_status,
        last_log,
        log_time,
        dt_nasc,
        contato,
        contato2,
        cargo,
        departamento,
        alarm_id,
        cod_usuario,
        avatar

      });

      await usersRepository.save(user);

      return user;
    }
  }

  export default CreateUsersService;
