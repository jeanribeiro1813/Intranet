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
const nodemailer_1 = __importDefault(require("nodemailer"));
const HandleBarsEmailsTemplates_1 = __importDefault(require("./HandleBarsEmailsTemplates"));
//criando cass EtherelMail.
class EtherelMail {
    //Função de Envio de Email no qual não tem retorno por isso esta promise Void
    static sendMail({ to, from, subject, templateData }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Criando uma conta teste , para configurar no transporte
            const account = yield nodemailer_1.default.createTestAccount();
            const mailTemplate = new HandleBarsEmailsTemplates_1.default();
            //Criando o transporte SMTP do objeto, configurando conforme necessita , host , port sercure e autenticação do usuario atraves da conta criada 
            const transporter = nodemailer_1.default.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                },
            });
            //Aqui estou configurando a mensagem de quem e para quem com a devida mensagem no corpo do email
            const message = yield transporter.sendMail({
                from: {
                    name: (from === null || from === void 0 ? void 0 : from.name) || 'Equipe Regea',
                    address: (from === null || from === void 0 ? void 0 : from.email) || 'suporte_regea@uol.com.br'
                },
                to: {
                    name: to.name,
                    address: to.email
                },
                subject,
                html: yield mailTemplate.parse(templateData),
            });
            //ID DA MENSAGEM
            console.log('Message sent: %s', message.messageId);
            //Link para verificar o email que esta recebendo a mensagem
            console.log('Preview URL %s', nodemailer_1.default.getTestMessageUrl(message));
        });
    }
}
exports.default = EtherelMail;
