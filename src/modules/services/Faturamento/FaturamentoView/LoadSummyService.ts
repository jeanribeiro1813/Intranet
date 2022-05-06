import { getCustomRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../modules/typeorm/repositories/FaturamentoViewsRepository';
import RedisCache from '../../../../shared/cache/RedisCache';
import FaturamentoView from '../../../typeorm/entities/FaturamentoView';


interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidfat: string,
    cliente: string,
    empresa: string,
    departamento: string,
    nprojeto: string,
    uuidprojeto: string,
    projeto: string,
    atividade: string,
    data: string,
    inicio:string,
    fim: string,
    obs: string,
    status:string,

}





class LoadFatSummaryService{
    public async summary (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(FaturamentoViewsRepository);

        //Podendo instanciar e chamar as funções Redis que criei
        //const redisCache = new RedisCache();


        /*
        
        //Criando um recover no caso de cache, aqui vai ser onde ele vai procurar se existe cache 
        
        let fatview = redisCache.recover<FaturamentoView>('API_REDIS_SUMMARY')

        //Se não existir nenhum cache ele vai no if pois ele vai criar um cache lá
        
        
        */
        
        
        /*
            //Tenho que colocar tudo da condição pois o cache vai ser criado aqui 
            if(!fatview){

                const user = await projetosrRepository.find({});
                
                //Criando um save Redis

                await redisCache.save('API_REDIS_SUMMARY',fatview)
            }

            return user;
        */
        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidfat: use?.uuidfat,
                cliente: use?.cliente,
                empresa: use?.empresa,
                departamento: use?.departamento,
                nprojeto: use?.nprojeto,
                uuidprojeto: use?.uuidprojeto,
                projeto: use?.projeto,
                atividade: use?.atividade,
                data: use?.data,
                inicio: use?.inicio,
                fim: use?.fim,
                obs: use?.obs,
                status:use?.status



            }
            return DescItemOfSummary;
            }

        )

        const responseDTO = {
            summary,
        };

        

        return responseDTO;
    }
}

export default LoadFatSummaryService;
