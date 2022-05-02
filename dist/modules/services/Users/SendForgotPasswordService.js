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
const UserTokenRepository_1 = __importDefault(require("../../typeorm/repositories/UserTokenRepository"));
const etherelMail_1 = __importDefault(require("../../../config/mail/etherelMail"));
const path_1 = __importDefault(require("path"));
/*Na Teoria o que acontece é que ao enviar o request esqueceu senha , dentro da tabela users_tokens , cria um novo token para quando o colaborador
for mudar a senha e essa tabela acossia uma novo token ligando com o id do usuario*/
class SendForgotPasswordService {
    //O Metodo Void já informa que não precisa retornar
    execute({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Pegando o custom do Repositorio de Usuarios
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepository_1.default);
            //Pegando o custo do Repositorio de Usuario token 
            const userTokenRepository = (0, typeorm_1.getCustomRepository)(UserTokenRepository_1.default);
            //Pegando o usuario por email 
            const user = yield usersRepository.findByEmail(email);
            if (!user) {
                throw new AppErrors_1.default('Usario não existe', 401);
            }
            //Gerando um token , pegando pelo custom de generate do Repositorio de Token
            const { token } = yield userTokenRepository.generate(user.uuidusuario);
            //Pegando o caminho do arquivo que criei 
            const forgotPasswordTemplate = path_1.default.resolve(__dirname, '..', 'Users', 'views', 'forgot_password.hbs');
            //Passando a função do EtherelMail com o email que deve receber e o que vai apresentar no corpo do email no caso pegando a Class EtherelMail e o seu modulo sendMail
            //Passando da mesma forma que esta no modulo
            yield etherelMail_1.default.sendMail({
                to: {
                    name: user.usuario,
                    email: user.email
                },
                from: {
                    name: 'Equipe Regea',
                    email: 'suporte_regea@uol.com.br'
                },
                subject: '[Equipe Regea] Recuperação de Senha ',
                templateData: {
                    //Estou passando a variavel que conta o arquivo HTML
                    file: forgotPasswordTemplate,
                    //Aqui estou passando o nome do usuario e qual url vai o token para o usuario fazer o reset da senha 
                    variables: {
                        name: user.usuario,
                        link: `http://localhost:3333/reset_password?token=${token}`,
                    },
                },
            });
        });
    }
}
exports.default = SendForgotPasswordService;
