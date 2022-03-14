// import { getCustomRepository } from 'typeorm'
// import AppError from '../../../shared/errors/AppErrors';
// import Projetos from '../../typeorm/entities/Projetos';
// import ProjetosRepository from '../../typeorm/repositories/ProjetosRepository'


// interface IRequestDTO {
//   cod_proj_uuid: string,
//   data:string ;
//   contrato:number ;
//   co:string
//   projeto:string ;
//   cliente:string ;
//   cliente2:string ;
//   numero:string ;
//   gerente:string ;
//   coordenador:string,
//   equipe:string ;
//   status:string ;
//   proposta:string ;
//   departamento:string ;
//   previsao:string ;
//   nproc_origem:string ;
//   valor:string ;
//   memoalt:string ;
//   dt_fim:string ;
//   cod_proj:number ;

//   }

//   class CreatefaturaService {

//     public async update({cod_fat,cod_user, departamento, cod_proj, contrato, cod_ativ, data_, inicio, fim}: IRequestDTO): Promise<Projetos | Error> {

//       const usersRepository = getCustomRepository(ProjetosRepository);

//       const fatura = await usersRepository.findByCode(cod_fat);

//       if (!fatura) {
//         throw new AppError ('fatura não existe',404);
//       }

//       fatura.cod_user = cod_user ? cod_user : fatura.cod_user;
//       fatura.departamento = departamento ? departamento : fatura.departamento;
//       fatura.cod_proj = cod_proj ? cod_proj : fatura.cod_proj;
//       fatura.contrato = contrato ? contrato : fatura.contrato;
//       fatura.cod_ativ = cod_ativ ? cod_ativ : fatura.cod_ativ;
//       fatura.data_ = data_ ? data_ : fatura.data_;
//       fatura.inicio = inicio ? inicio : fatura.inicio;
//       fatura.fim = fim ? fim : fatura.fim;



//       await usersRepository.save(fatura);

//       return fatura;
//     }
//   }

//   export default CreatefaturaService;
