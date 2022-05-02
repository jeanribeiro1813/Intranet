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
const CreateSessionsService_1 = __importDefault(require("../../services/Sessions/CreateSessionsService"));
class SessionController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            //Criação de Sessão de usuario no caso quando o usuario for fazer o login
            const { login, senha } = request.body;
            const createSession = new CreateSessionsService_1.default();
            const users = yield createSession.execute({
                login, senha
            });
            return response.json(users);
        });
    }
}
exports.default = SessionController;
