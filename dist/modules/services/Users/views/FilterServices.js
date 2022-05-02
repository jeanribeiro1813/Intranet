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
const AppErrors_1 = __importDefault(require("../../../../shared/errors/AppErrors"));
const UsersViewRepository_1 = __importDefault(require("../../../typeorm/repositories/UsersViewRepository"));
class FilterServices {
    filterService({ status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getCustomRepository)(UsersViewRepository_1.default);
            const result = yield repository.createQueryBuilder().select()
                .where('status ilike :status', { status: `%${status}%` }).getMany();
            if (!result) {
                throw new AppErrors_1.default('Não Existe', 405);
            }
            return result;
        });
    }
}
exports.default = FilterServices;
