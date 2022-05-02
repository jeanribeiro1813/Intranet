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
const SendForgotPasswordService_1 = __importDefault(require("../../services/Users/SendForgotPasswordService"));
class ForgotPasswordControllers {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            //Passando no body apenas o email 
            const { email } = request.body;
            const SendForgotPasswordEmail = new SendForgotPasswordService_1.default();
            //Por não retornar nada não preciso colocar o await dentro de uma variavel 
            // Vai executar dentro de email pois é o que o parametro que esta passando dentro da body
            yield SendForgotPasswordEmail.execute({ email });
            return response.json('Verificar o email para Nova senha');
        });
    }
}
exports.default = ForgotPasswordControllers;
