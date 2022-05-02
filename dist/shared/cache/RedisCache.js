"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const cache_1 = __importDefault(require("../../config/cache"));
//Criando uma Classe para configuar o Redis no caso de configurar um "memoria", salvar , e deletar
class RedisCache {
    //Criando um construtor , pois o cliente vai esta recebendo de outra classe as mesmas funções, por isso foi criada da forma private pois o client só pode ser manipulado internamente na classe
    constructor() {
        this.client = new ioredis_1.default(cache_1.default.config.redis);
    }
    //Criando uma função save para assim armazenar a minha query 
    //Podemos ver que pede uma chame e um valor para executar 
    save(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.set(key, JSON.stringify(value));
        });
    }
    //
    recover(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.client.get(key);
            if (!data) {
                return null;
            }
            const parseData = JSON.parse(data);
            return parseData;
        });
    }
    invalidation(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.del(key);
        });
    }
}
exports.default = RedisCache;
