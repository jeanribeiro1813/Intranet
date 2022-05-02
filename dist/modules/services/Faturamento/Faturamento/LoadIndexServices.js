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
const FaturamentoViewsRepository_1 = __importDefault(require("../../../../modules/typeorm/repositories/FaturamentoViewsRepository"));
const AppErrors_1 = __importDefault(require("../../../../shared/errors/AppErrors"));
class LoadIndexServices {
    load({ uuidfat }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getCustomRepository)(FaturamentoViewsRepository_1.default);
            const index = yield repository.findByCode(uuidfat);
            if (!index) {
                throw new AppErrors_1.default('Não Existe', 404);
            }
            return index;
        });
    }
}
exports.default = LoadIndexServices;
