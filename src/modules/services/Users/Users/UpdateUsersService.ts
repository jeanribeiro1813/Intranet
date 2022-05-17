import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Users from '../../../../shared/infra/typeorm/entities/Users';
import UsersRepository from '../../../../shared/infra/typeorm/repositories/UsersRepository'
import RedisCache from '../../../../shared/cache/RedisCache';




interface IRequestDTO {
  uuidusuario:string,
    uuiddeparta:string ,   
    uuidcargo:string ,
    usuario:string ,
    email:string ,
    dt_nasc:string ,
    ramal:number ,
    contato:string ,
    contato2:string ,
    cpf_cnpj:string ,
    n_cnh:number ,
    dt_validade:string ,
    enquadramento:string ,
    banco:number ,
    carga_horaria:number,
    proventos:number ,
    va_vr:number ,
    vt:number ,
    seguro:number ,
    cv_medico:number,
    login: string,
    status:  string,
   
  }

  class UpdateUsersService {

    public async update({ 
      uuidusuario,
        login,   
        usuario,
        n_cnh,
        dt_validade,
        email,
        ramal,
        status,
        dt_nasc,
        contato,
        contato2,
        uuidcargo,
        uuiddeparta,
        cpf_cnpj,
        enquadramento,
        carga_horaria,
        proventos,
        vt,
        banco,
        seguro,
        cv_medico,
        va_vr
    }: IRequestDTO): Promise<Users> {


      const Repository = getCustomRepository(UsersRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findById(uuidusuario);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      await redisCache.invalidation('API_REDIS_USER');

      result.login = login ? login : result.login;
      result.usuario = usuario ? usuario : result.usuario;
      result.n_cnh = n_cnh ? n_cnh : result.n_cnh;
      result.dt_validade = dt_validade ? dt_validade : result.dt_validade;
      result.ramal = ramal ? ramal : result.ramal;
      result.email = email ? email : result.email;
      result.dt_nasc = dt_nasc ? dt_nasc : result.dt_nasc;
      result.contato = contato ? contato : result.contato;
      result.contato2 = contato2 ? contato2 : result.contato2;
      result.uuidcargo = uuidcargo ? uuidcargo : result.uuidcargo;
      result.uuiddeparta = uuiddeparta ? uuiddeparta : result.uuiddeparta;
      result.cpf_cnpj = cpf_cnpj ? cpf_cnpj : result.cpf_cnpj;
      result.enquadramento = enquadramento ? enquadramento : result.enquadramento;
      result.carga_horaria = carga_horaria ? carga_horaria : result.carga_horaria;
      result.proventos = proventos ? proventos : result.proventos;
      result.vt = vt ? vt : result.vt;
      result.banco = banco ? banco : result.banco;
      result.seguro = seguro ? seguro : result.seguro;
      result.cv_medico = cv_medico ? cv_medico : result.cv_medico;
      result.va_vr = va_vr ? va_vr : result.va_vr;
      result.status = status ? status : result.status;


      await Repository.save(result);

      return result;
    }
  }

  export default UpdateUsersService;
