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
const ShowProfileService_1 = __importDefault(require("../../services/Users/ShowProfileService"));
const UpdateShowProfileService_1 = __importDefault(require("../../services/Users/UpdateShowProfileService"));
class ProfileController {
    //Loading
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const showProfiles = new ShowProfileService_1.default();
            const user_id = request.user.cod_usuario_uuid;
            const result = yield showProfiles.showProfile({ user_id });
            const usuario = [{
                    uuidusuario: result.uuidusuario,
                    usuario: result.usuario,
                    login: result.login,
                    email: result.email,
                }];
            return response.json(usuario);
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = request.user.cod_usuario_uuid;
            const { usuario, email, senha, old_senha } = request.body;
            const updateFuncao = new UpdateShowProfileService_1.default();
            const user = yield updateFuncao.updateProfile({
                user_id, usuario, email, senha, old_senha
            });
            return response.json("Troca de Senha Realizada com sucesso");
        });
    }
}
exports.default = ProfileController;
