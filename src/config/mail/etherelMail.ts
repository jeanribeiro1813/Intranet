import nodemailer from 'nodemailer';
import HandleBarsEmailsTemplates from './HandleBarsEmailsTemplates'

interface IMailContact {
    
    name:string,
    email:string

}

interface ITemplatesVariables{

    [key: string] : string | number;

}

interface IParserEmailTemplate {

    template:string;
    variables:ITemplatesVariables
}

// Criando interfaze para email , passando to (Para quem , no caso o email) e body (Mensagem que vai apresentar no corpo do email)
interface SendEmail{
    
    to: IMailContact;
    from : IMailContact
    subject :string,
    templateData:IParserEmailTemplate
}



//criando cass EtherelMail.
export default class EtherelMail {
    //Função de Envio de Email no qual não tem retorno por isso esta promise Void
    static async sendMail ({to , from , subject,templateData}:SendEmail):Promise<void>{

        //Criando uma conta teste , para configurar no transporte
        const account = await nodemailer.createTestAccount();

        const mailTemplate = new HandleBarsEmailsTemplates();

        //Criando o transporte SMTP do objeto, configurando conforme necessita , host , port sercure e autenticação do usuario atraves da conta criada 
        const transporter =  nodemailer.createTransport({
            host: account.smtp.host,
            port : account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user:account.user,
                pass:account.pass
            },
        });

        //Aqui estou configurando a mensagem de quem e para quem com a devida mensagem no corpo do email
        const message = await transporter.sendMail({
            from: {
                name: from?.name || 'Equipe Regea',
                address: from?.email || 'suporte_regea@uol.com.br'
            },
            to:{
                name: to.name,
                address: to.email
            },
            subject,
            html:await mailTemplate.parse(templateData),
        });

        //ID DA MENSAGEM
        console.log('Message sent: %s', message.messageId);

        //Link para verificar o email que esta recebendo a mensagem
        console.log('Preview URL %s', nodemailer.getTestMessageUrl(message));

    }
    
}