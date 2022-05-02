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
const jsonwebtoken_1 = require("jsonwebtoken");
const AppErrors_1 = __importDefault(require("../../../shared/errors/AppErrors"));
const auth_1 = __importDefault(require("../../../config/auth"));
//Criando autenticação para colocar nas rotas
function isAutenticacion(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        //De onde virao token dentro de headers
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new AppErrors_1.default('JWT faltando token', 401);
        }
        //Bearer kosksoaksoakoskaoskaosk -  quebrando a string [0] bearer [1] token
        const [type, token] = authHeader.split(' ');
        try {
            //Verificando o token e a secret ( Ele vai verificar se o token foi criado com a secret)
            const decodeToken = (0, jsonwebtoken_1.verify)(token, auth_1.default.jwt.secret);
            //Sub é o ID do usuario
            const { sub } = decodeToken;
            // console.log(decodeToken)
            //Reescrevendo a função requests dentro da pasta @types / express
            request.user = {
                cod_usuario_uuid: sub,
            };
            return next();
        }
        catch (_a) {
            throw new AppErrors_1.default('Invalid token', 401);
        }
    });
}
exports.default = isAutenticacion;
