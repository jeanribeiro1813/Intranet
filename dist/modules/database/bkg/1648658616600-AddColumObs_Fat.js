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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumObsFat1648658616600 = void 0;
const typeorm_1 = require("typeorm");
class AddColumObsFat1648658616600 {
    constructor() {
        this.name = 'AddColumObsFat1648658616600';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn('tb_fat', new typeorm_1.TableColumn({
                name: 'obs',
                type: 'varchar',
                isNullable: true,
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn('obs', 'tb_fat');
        });
    }
}
exports.AddColumObsFat1648658616600 = AddColumObsFat1648658616600;
