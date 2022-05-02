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
const UsersRepository_1 = __importDefault(require("../../../modules/typeorm/repositories/UsersRepository"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../../../config/auth"));
class CreateSessionsService {
    execute({ login, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepository_1.default);
            const user = yield usersRepository.findByLogin(login);
            if (!user) {
                throw new AppErrors_1.default('Login/Senha Incorreto.', 401);
            }
            const passwordConfir = yield (0, bcryptjs_1.compare)(senha, user.senha);
            if (!passwordConfir) {
                throw new AppErrors_1.default('Login/Senha Incorreto.', 401);
            }
            //1 ° Parametro Payload , 2° Parametro Hash Posso pegar dentro do site MD5, 3° Configuração = ID e Validade do token 
            const token = (0, jsonwebtoken_1.sign)({
                uuiduser: user.uuidusuario,
                job: user.uuidcargo,
                departament: user.uuiddeparta,
            }, auth_1.default.jwt.secret, {
                subject: user.uuidusuario,
                expiresIn: auth_1.default.jwt.expireIn,
            });
            return { token };
        });
    }
}
exports.default = CreateSessionsService;
