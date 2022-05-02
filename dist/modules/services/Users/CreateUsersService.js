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
class CreateUsersService {
    execute({ login, senha, usuario, n_cnh, dt_validade, email, ramal, status, h_status, last_log, log_time, dt_nasc, contato, contato2, uuidcargo, uuiddeparta, alarm_id, cod_usuario, avatar, cpf_cnpj, equadramento, carga_horaria, proventos, va, vr, vt, banco, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepository_1.default);
            const loginUserExists = yield usersRepository.findByLogin(login);
            if (loginUserExists) {
                throw new AppErrors_1.default('Login já cadastrado.', 409);
            }
            const checkUserExists = yield usersRepository.findByEmail(email);
            if (checkUserExists) {
                throw new AppErrors_1.default('Email já cadastrado.', 409);
            }
            const hashedPassword = yield (0, bcryptjs_1.hash)(senha, 8);
            const user = usersRepository.create({
                login,
                senha: hashedPassword,
                usuario,
                n_cnh,
                dt_validade,
                email,
                ramal,
                status,
                h_status,
                last_log,
                log_time,
                dt_nasc,
                contato,
                contato2,
                uuidcargo,
                uuiddeparta,
                alarm_id,
                cod_usuario,
                avatar,
                cpf_cnpj,
                equadramento,
                carga_horaria,
                proventos,
                va,
                vr,
                vt,
                banco
            });
            yield usersRepository.save(user);
            return user;
        });
    }
}
exports.default = CreateUsersService;
