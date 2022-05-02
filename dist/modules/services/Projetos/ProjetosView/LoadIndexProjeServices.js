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
const ProjetosViewRepository_1 = __importDefault(require("../../../typeorm/repositories/ProjetosViewRepository"));
const AppErrors_1 = __importDefault(require("../../../../shared/errors/AppErrors"));
class LoadIndexProjeServices {
    index({ uuidprojeto }) {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosrRepository = (0, typeorm_1.getCustomRepository)(ProjetosViewRepository_1.default);
            const projeto = yield projetosrRepository.findByCode(uuidprojeto);
            if (!projeto) {
                throw new AppErrors_1.default('Esse projeto não existe', 404);
            }
            return projeto;
        });
    }
}
exports.default = LoadIndexProjeServices;
