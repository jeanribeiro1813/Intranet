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
const AdvRepository_1 = __importDefault(require("../../typeorm/repositories/AdvRepository"));
class LoadClientesSummaryService {
    executeDes() {
        return __awaiter(this, void 0, void 0, function* () {
            const projetosrRepository = (0, typeorm_1.getCustomRepository)(AdvRepository_1.default);
            const user = yield projetosrRepository.find({});
            const summary = user.map((use) => {
                const DescItemOfSummary = {
                    codadv: use.codadv,
                    cod_page: use.cod_page,
                    desc_adv: use.desc_adv,
                    cod_adv: use.cod_adv,
                };
                return DescItemOfSummary;
            });
            const responseDTO = {
                summary,
            };
            return responseDTO;
        });
    }
}
exports.default = LoadClientesSummaryService;
