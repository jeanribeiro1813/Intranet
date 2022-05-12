import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Users from '../../../../shared/infra/typeorm/entities/Users';
import UsersRepository from '../../../../shared/infra/typeorm/repositories/UsersRepository'
import { hash } from 'bcryptjs';
import RedisCache from '../../../../shared/cache/RedisCache';




interface IRequestDTO {
    login:string ,   
    senha:string ,
    usuario:string ,
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
    uuidcargo:string,
    uuiddeparta:string ,
    alarm_id:number ,
    cod_usuario:number ,
    avatar:string ,
    cpf_cnpj:string,
    enquadramento: string,
    carga_horaria:  number,
    proventos:  number,
    vt: number,
    banco: number,
    seguro: number,
    cv_medico: number,
    tp_va_vr: string,
    va_vr: number,

  }

  class CreateUsersService {

    public async execute({ 
        login,   
        senha,
        usuario,
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
        uuidcargo,
        uuiddeparta,
        alarm_id,
        cod_usuario,
        avatar,cpf_cnpj,
        enquadramento,
        carga_horaria,
        proventos,
        vt,
        banco,
        seguro,
        cv_medico,
        tp_va_vr,
        va_vr
    }: IRequestDTO): Promise<Users> {


      const usersRepository = getCustomRepository(UsersRepository);

      const loginUserExists = await usersRepository.findByLogin(login);

      const redisCache = new RedisCache();

      if (loginUserExists) {
        throw new AppError('Login já cadastrado.',409);

      }

      const checkUserExists = await usersRepository.findByEmail(email);


      if (checkUserExists) {
        throw new AppError('Email já cadastrado.',409);

      }

      const hashedPassword = await hash(senha, 8);

      const user =  usersRepository.create({
        login,   
        senha: hashedPassword,
        usuario,
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
        uuidcargo,
        uuiddeparta,
        alarm_id,
        cod_usuario,
        avatar,
        cpf_cnpj,
        enquadramento,
        carga_horaria,
        proventos,
        vt,
        banco,
        seguro,
        cv_medico,
        tp_va_vr,
        va_vr

      });

      await redisCache.invalidation('API_REDIS_USER');


      await usersRepository.save(user);

      return user;
    }
  }

  export default CreateUsersService;
