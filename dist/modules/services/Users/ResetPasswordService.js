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
const typeorm_1 = require("typeorm");
const AppErrors_1 = __importDefault(require("../../../shared/errors/AppErrors"));
const UsersRepository_1 = __importDefault(require("../../typeorm/repositories/UsersRepository"));
const date_fns_1 = require("date-fns");
const UserTokenRepository_1 = __importDefault(require("../../typeorm/repositories/UserTokenRepository"));
const bcrypt_1 = require("bcrypt");
//Aqui é feito para pegar o novo token se o token estiver no tempo definido que é até 2h , a partir desse momento o usuario tem acesso a mudar a senha
class ResetPasswordService {
    execute({ token, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Pegando o custom do Repositorio de Usuarios
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepository_1.default);
            //Pegando o custo do Repositorio de Usuario token 
            const userTokenRepository = (0, typeorm_1.getCustomRepository)(UserTokenRepository_1.default);
            //Pegando o token do usuario 
            //Pegando o Token criado do usuario no qual foi enviado pela função de esquecer a senha 
            const userToken = yield userTokenRepository.findByToken(token);
            console.log(userToken === null || userToken === void 0 ? void 0 : userToken.token);
            // Condição de caso o Token não existir , se o usuario não apertou no esquecer senha.
            if (!userToken) {
                throw new AppErrors_1.default('Token do usuario não existe', 401);
            }
            //Se o Token existir vai pegar o Id do Usuario pela variavel userToken da TABELA USERS_TOKENS
            const user = yield usersRepository.findByCodUser(userToken.user_id);
            //Vai verificar se existe o usuario 
            if (!user) {
                throw new AppErrors_1.default('Usuario não existe', 401);
            }
            /*
              Criando a questão de validação do Token
            */
            // Pegando a data de criação do Token da TABELA USERS_TOKENS
            const tokenCreatedAt = userToken.created_at;
            // Criando uma Variavel para comparar o tempo que foi criado o Token e o tempo que estou definidino no caso a cada 2 horas.
            // ** Verificar mais afundo a função addHours
            const compareDate = (0, date_fns_1.addHours)(tokenCreatedAt, 2);
            //Criando uma condição para verificar pela data atual e a variavel compareDate se já passou as 2 horas 
            if ((0, date_fns_1.isAfter)(Date.now(), compareDate)) {
                throw new AppErrors_1.default('Token expirado', 405);
            }
            //Nesse caso o usuario esta recebendo uma nova senha com criptografia.
            user.senha = yield (0, bcrypt_1.hash)(senha, 8);
            //Salvando o mesmo 
            yield usersRepository.save(user);
        });
    }
}
exports.default = ResetPasswordService;
