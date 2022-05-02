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
const Users_1 = __importDefault(require("../../typeorm/entities/Users"));
class FilterEspeServices {
    filterService({ status, uuidusuario, h_status, uuidcargo, uuiddeparta }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getRepository)(Users_1.default);
            const result = yield repository.createQueryBuilder().select()
                .where('status ilike :status or uuidusuario :: text ilike :uuidusuario or h_status  ilike :h_status  or uuiddeparta :: text  ilike :uuiddeparta  or uuidcargo :: text  ilike :uuidcargo', { status: `%${status}%`,
                uuidusuario: `%${uuidusuario}%`,
                h_status: `%${h_status}%`,
                uuiddeparta: `%${uuiddeparta}%`,
                uuidcargo: `%${uuidcargo}%` }).getMany();
            if (!result) {
                throw new AppErrors_1.default('Não Existe', 405);
            }
            return result;
        });
    }
}
exports.default = FilterEspeServices;
