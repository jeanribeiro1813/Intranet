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
const bcryptjs_1 = require("bcryptjs");
const UsersRepository_1 = __importDefault(require("../../typeorm/repositories/UsersRepository"));
const AppErrors_1 = __importDefault(require("../../../shared/errors/AppErrors"));
class UpdateShowProfileService {
    updateProfile({ user_id, usuario, email, senha, old_senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userUpdate = (0, typeorm_1.getCustomRepository)(UsersRepository_1.default);
            //buscando por id
            const user = yield userUpdate.findByCodUser(user_id);
            if (!user) {
                throw new AppErrors_1.default('Usuario não Existe', 409);
            }
            //Buscando por email
            const userEmail = yield userUpdate.findByEmail(email);
            //Se existir um email e esse é o codigo do email for igual
            if (userEmail && userEmail.uuidusuario !== user_id) {
                throw new AppErrors_1.default('Já existe usuario com esse email', 409);
            }
            //Condigção de tiver uma senha e o usuario não colocou a senha antiga
            if (senha && !old_senha) {
                throw new AppErrors_1.default('Colocar a senha antiga', 409);
            }
            //Condição que vai rodar para checar a velha senha
            //Colocando condição caso a senha do usuario estiver errada
            if (senha && old_senha) {
                //Usando o compare para pegar a velha senha e comparando com a senha do banco para vê se é igual 
                const checkOldPassowrd = yield (0, bcryptjs_1.compare)(old_senha, user.senha);
                if (!checkOldPassowrd) {
                    throw new AppErrors_1.default('Senha antiga não existe', 409);
                }
                //Criando um hash para a nova senha
                user.senha = yield (0, bcryptjs_1.hash)(senha, 8);
            }
            //Atualizando os demais campos
            user.usuario = usuario ? usuario : user.usuario;
            user.email = email ? email : user.email;
            yield userUpdate.save(user);
            return user;
        });
    }
}
exports.default = UpdateShowProfileService;
