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
const N2Repository_1 = __importDefault(require("../../typeorm/repositories/N2Repository"));
class CreateServices {
    create({ uuidn2, codigo, descricao }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getCustomRepository)(N2Repository_1.default);
            const checkUserExists = yield repository.findById(codigo);
            if (checkUserExists) {
                throw new AppErrors_1.default('Nome já existe.', 404);
            }
            const result = repository.create({
                uuidn2, codigo, descricao
            });
            yield repository.save(result);
            return result;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getCustomRepository)(N2Repository_1.default);
            const list = yield repository.find({});
            const summary = list.map((obj) => {
                const DescItemOfSummary = {
                    uuidn2: obj.uuidn2,
                    codigo: obj.codigo,
                    descricao: obj.descricao
                };
                return DescItemOfSummary;
            });
            const responseDTO = {
                summary,
            };
            return responseDTO;
        });
    }
    update({ uuidn2, codigo, descricao }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getCustomRepository)(N2Repository_1.default);
            const result = yield repository.findOne(uuidn2);
            if (!result) {
                throw new AppErrors_1.default('Dados não existe', 404);
            }
            result.codigo = codigo ? codigo : result.codigo;
            result.descricao = descricao ? descricao : result.descricao;
            yield repository.save(result);
            return result;
        });
    }
    delete({ uuidn2 }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getCustomRepository)(N2Repository_1.default);
            const result = yield repository.findOne(uuidn2);
            if (!result) {
                throw new AppErrors_1.default('Não Existe ', 402);
            }
            yield repository.remove(result);
        });
    }
}
exports.default = CreateServices;
