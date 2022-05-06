import {Request,Response,NextFunction} from 'express';
import Redis from 'ioredis';
import {RateLimiterRedis} from 'rate-limiter-flexible'
import AppError from '../../../shared/errors/AppErrors';


     
       
  export default async function rateLimiter(request:Request,response:Response,next:NextFunction): Promise<void> {

    try{

         //Configurando o redis no qual passando todas configuração HOST , PORT e PASS, seguindo esse padrão
        //Estou configurando o redis pois ele vai "salvar" as configuração de segurança
        const redisClient = new Redis({
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
            password: process.env.REDIS_PASS || undefined,
        });

        //Criando a parte de segurança o middler , no quaal..
        /* storeCliente: Passo as configurações do "banco" no qual é a requisição no caso o redisClient criado acima
        keyPrefix: o tipo , ratelimit(segurança)
        points: numero de requisição por ip
        duration: segundos por points (requisição por ip)
        */
        const limiter = new RateLimiterRedis({
            storeClient: redisClient,
            keyPrefix: 'ratelimit',
            points:5,
            duration:1
        });



        //Consumindo o requests por ip
        await limiter.consume(request.ip);

        return next();
    }
    catch(error){
        throw new AppError ('Existe muito requests',409); 
    }

  }