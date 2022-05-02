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
const CreateUsersService_1 = __importDefault(require("../../services/Users/CreateUsersService"));
const LoadIndexService_1 = __importDefault(require("../../services/Users/LoadIndexService"));
const FilterEspecificoUsersServices_1 = __importDefault(require("../../services/Users/FilterEspecificoUsersServices"));
class UsersControllers {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { login, senha, usuario, n_cnh, dt_validade, email, ramal, status, h_status, last_log, log_time, dt_nasc, contato, contato2, uuidcargo, uuiddeparta, alarm_id, cod_usuario, avatar, cpf_cnpj, equadramento, carga_horaria, proventos, va, vr, vt, banco, } = request.body;
            const createFuncao = new CreateUsersService_1.default();
            const funcao = yield createFuncao.execute({ login,
                senha,
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
                avatar, cpf_cnpj,
                equadramento,
                carga_horaria,
                proventos,
                va,
                vr,
                vt,
                banco, });
            if (funcao instanceof Error) {
                return response.status(400).json(funcao.message);
            }
            return response.json('Usuario Cadastrado');
        });
    }
    loading(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uuidusuario } = request.params;
            const loadingService = new LoadIndexService_1.default();
            const result = yield loadingService.load({ uuidusuario });
            return response.json(result);
        });
    }
    filter(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status, uuidusuario, h_status, uuiddeparta, uuidcargo } = request.body;
            const loadingService = new FilterEspecificoUsersServices_1.default();
            const result = yield loadingService.filterService({ status, uuidusuario, h_status, uuiddeparta, uuidcargo });
            return response.json(result);
        });
    }
}
exports.default = UsersControllers;
