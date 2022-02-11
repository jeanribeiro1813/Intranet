// import { getCustomRepository } from 'typeorm'
// import ManutencaoRepository from '../../typeorm/repositories/ManutencaoRepository'



// interface IRequestDTO {
//     id: any;
//     ordem_serv:string,
//     mod_viaduto:string,
//     locali:string;
//     descri:string;
//     tipologia:string;
//     pilha:string;
//     subcontra:string;
//     parede_guia:string;
//     inicio_perfu:string;
//     vazio:string;
//     cls:string;
//     long_metro:string;
//     diam:string;
//     rend_metro_dia: string;
//     status:string;
//     maquina:string;
//     ensaio_csl:string;
//     obs:string;
//     e:string;
//     n: string;

  


// }

// //Organizado em Ordem para fazer o update
// class UpPilotesByIdService{
//     public async saved ({id,ordem_serv,mod_viaduto,locali,descri,tipologia,pilha,e,n,
//         subcontra,parede_guia,inicio_perfu,vazio,cls,long_metro,diam,rend_metro_dia,status,maquina,ensaio_csl,obs}:IRequestDTO){
        

//         const ManutencaoRepository = getCustomRepository(ManutencaoRepository);

//         const pilow = await ManutencaoRepository.findOne(id);

//         if(!pilow){
            
//             return new Error('Erro'); 
//         }

//         pilow.ordem_serv = ordem_serv ? ordem_serv : pilow.ordem_serv;
//         pilow.mod_viaduto  = mod_viaduto ? mod_viaduto : pilow.mod_viaduto;
//         pilow.locali = locali ? locali : pilow.locali;
//         pilow.descri = descri ? descri : pilow.descri;
//         pilow.tipologia = tipologia ? tipologia : pilow.tipologia;
//         pilow.pilha = pilha ? pilha : pilow.pilha;
//         pilow.subcontra = subcontra ? subcontra : pilow.subcontra;
//         pilow.parede_guia = parede_guia ? parede_guia : pilow.parede_guia;
//         pilow.inicio_perfu = inicio_perfu ? inicio_perfu : pilow.inicio_perfu;
//         pilow.vazio = vazio ? vazio : pilow.vazio;
//         pilow.cls = cls ? cls : pilow.cls;
//         pilow.long_metro = long_metro ? long_metro : pilow.long_metro;
//         pilow.diam = diam ? diam : pilow.diam;
//         pilow.rend_metro_dia = rend_metro_dia ? rend_metro_dia : pilow.rend_metro_dia;
//         pilow.status = status ? status : pilow.status;
//         pilow.maquina = maquina ? maquina : pilow.maquina;
//         pilow.ensaio_csl = ensaio_csl ? ensaio_csl : pilow.ensaio_csl;
//         pilow.obs = obs ? obs : pilow.obs;
//         pilow.e = e ? e : pilow.e;
//         pilow.n = n ? n : pilow.n;
    
        
//         await ManutencaoRepository.save(pilow);

//         return pilow;
        
     
//     }

// }


// export default UpPilotesByIdService;

