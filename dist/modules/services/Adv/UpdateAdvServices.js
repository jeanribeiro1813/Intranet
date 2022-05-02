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
const AdvRepository_1 = __importDefault(require("../../typeorm/repositories/AdvRepository"));
class UpdateClientService {
    update({ codadv, cod_page, desc_adv, cod_adv }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(AdvRepository_1.default);
            const client = yield usersRepository.findOne(codadv);
            if (!client) {
                throw new AppErrors_1.default('client não existe', 404);
            }
            client.cod_page = cod_page ? cod_page : client.cod_page;
            client.desc_adv = desc_adv ? desc_adv : client.desc_adv;
            yield usersRepository.save(client);
            return client;
        });
    }
}
exports.default = UpdateClientService;
