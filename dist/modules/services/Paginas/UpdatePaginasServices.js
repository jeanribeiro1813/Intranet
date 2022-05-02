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
const PaginaRepository_1 = __importDefault(require("../../typeorm/repositories/PaginaRepository"));
class UpdatePaginasService {
    update({ cod_page_uuid, pagina, descricao, banner, cod_page }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(PaginaRepository_1.default);
            const client = yield usersRepository.findOne(cod_page_uuid);
            if (!client) {
                throw new AppErrors_1.default('client não existe', 404);
            }
            client.pagina = pagina ? pagina : client.pagina;
            client.descricao = descricao ? descricao : client.descricao;
            client.cod_page = cod_page ? cod_page : client.cod_page;
            client.banner = banner ? banner : client.banner;
            yield usersRepository.save(client);
            return client;
        });
    }
}
exports.default = UpdatePaginasService;
