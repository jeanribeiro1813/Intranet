import Redis , {Redis as RedisClient} from 'ioredis';
import cacheConfig from '../../config/cache';


//Criando uma Classe para configuar o Redis no caso de configurar um "memoria", salvar , e deletar
export default class RedisCache{

    //Criando uma private , pois só dentro dessa classe que posso estar configurando meu Redis
    private client : RedisClient;


    //Criando um construtor , pois o cliente vai esta recebendo de outra classe as mesmas funções, por isso foi criada da forma private pois o client só pode ser manipulado internamente na classe
    constructor (){

        this.client = new Redis(cacheConfig.config.redis);
    }


    //Criando uma função save para assim armazenar a minha query 
    //Podemos ver que pede uma chave e um valor para executar é um SET
    public async save (key:string,value:any):Promise<void>{
        
        await this.client.set(key, JSON.stringify(value))
    
    }

    //É algo mais generalisa porém feito para pegar os dados é um GET
    public async recover<Generalista>(key:string):Promise < Generalista | null>{
        const data = await this.client.get(key)

        if(!data){
            return null;
        }

        const parseData = JSON.parse(data) as Generalista;

        return parseData;
    }


    //Apagar o cache da Query , DELETE
    public async invalidation (key : string): Promise <void>{
        await this.client.del(key)
    }



}