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
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
class handlebarsMailTemplates {
    parse({ file, variables }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Lendo o arquivo com fs e passando o encoding utf8 padrão nacional
            const templateFileContent = yield fs_1.default.promises.readFile(file, {
                encoding: 'utf8'
            });
            //Aqui o handlebars vai compilar o templete que foi lido
            const parseTemplate = handlebars_1.default.compile(templateFileContent);
            return parseTemplate(variables);
        });
    }
}
exports.default = handlebarsMailTemplates;
