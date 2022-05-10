import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Users from '../../../../shared/infra/typeorm/entities/Users';
import UsersRepository from '../../../../shared/infra/typeorm/repositories/UsersRepository'
import { hash } from 'bcryptjs';


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

  class UpdatePaginasService {

    public async execute({ 

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

        const Repository = getCustomRepository(UsersRepository);

        const result = await Repository.findOne({cod_page_uuid});
  
        if (!result) {
          throw new AppError ('client não existe',404);
        }
  
  
        result.pagina = pagina ? pagina : result.pagina;
        result.descricao = descricao ? descricao : result.descricao;
        result.cod_page = cod_page ? cod_page : result.cod_page;
        result.banner = banner ? banner : result.banner;
    
  
        await Repository.save(result);
  
        return result;
      }
    }
  
    export default UpdatePaginasService;
  