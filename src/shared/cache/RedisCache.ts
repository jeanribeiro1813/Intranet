import Redis , {Redis as RedisClient} from 'ioredis';
import cacheConfig from '@config/cache';


//Criando uma Classe para configuar o Redis no caso de configurar um "memoria", salvar , e deletar
export default class RedisCache{

    //Criando uma private , pois só dentro dessa classe que posso estar configurando meu Redis
    private client : RedisClient;


    //Criando um construtor , pois o cliente vai esta recebendo de outra classe as mesmas funções, por isso foi criada da forma private pois o client só pode ser manipulado internamente na classe
    constructor (){

        this.client = new Redis(cacheConfig.config.redis);
    }


    //Criando uma função save para assim armazenar a minha query 
    //Podemos ver que pede uma chame e um valor para executar 
    public async save (key:string,value:any):Promise<void>{
        
        await this.client.set(key, JSON.stringify(value))
    
    }

    //
    public async recover<T>(key:string):Promise < T | null>{
        const data = await this.client.get(key)

        if(!data){
            return null;
        }

        const parseData = JSON.parse(data) as T;

        return parseData;
    }


    public async invalidation (key : string): Promise <void>{
        await this.client.del(key)
    }



}