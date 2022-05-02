"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fatuRoutes_1 = __importDefault(require("./Faturamento/fatuRoutes"));
const projectRoutes_1 = __importDefault(require("./Projeto/projectRoutes"));
const projectViewRoutes_1 = __importDefault(require("./Projeto/projectViewRoutes"));
const usersRoutes_1 = __importDefault(require("./Usuario/usersRoutes"));
const usersViewRoutes_1 = __importDefault(require("./Usuario/usersViewRoutes"));
const sessionRoutes_1 = __importDefault(require("./Usuario/sessionRoutes"));
const passwordRoutes_1 = __importDefault(require("./Usuario/passwordRoutes"));
const CargoRoutes_1 = __importDefault(require("./Cargo/CargoRoutes"));
const CarrosRoutes_1 = __importDefault(require("./Carros/CarrosRoutes"));
const ClientesRoutes_1 = __importDefault(require("./Clientes/ClientesRoutes"));
const ChamadosRoutes_1 = __importDefault(require("./Chamados/ChamadosRoutes"));
const profileRoutes_1 = __importDefault(require("./Profiles/profileRoutes"));
const fatu_View_Routes_1 = __importDefault(require("./Faturamento/fatu.View.Routes"));
const DepartamentoRoutes_1 = __importDefault(require("./Departamento/DepartamentoRoutes"));
const AtividadeRoutes_1 = __importDefault(require("./Atividade/AtividadeRoutes"));
const ContratoRoutes_1 = __importDefault(require("./Contrato/ContratoRoutes"));
const FuncionariosRoutes_1 = __importDefault(require("./Funcionarios/FuncionariosRoutes"));
const AdvRoutes_1 = __importDefault(require("./Adv/AdvRoutes"));
const PagamentoRoutes_1 = __importDefault(require("./Pagamento/PagamentoRoutes"));
const PagamentoViewRoutes_1 = __importDefault(require("./Pagamento/PagamentoViewRoutes"));
const ManutencaoRoutes_1 = __importDefault(require("./Manutencao/ManutencaoRoutes"));
const PaginasRoutes_1 = __importDefault(require("./Paginas/PaginasRoutes"));
const FornecedoresRoutes_1 = __importDefault(require("./Fornecedores/FornecedoresRoutes"));
const N1Routes_1 = __importDefault(require("./N1/N1Routes"));
const N2Routes_1 = __importDefault(require("./N2/N2Routes"));
const N3Routes_1 = __importDefault(require("./N3/N3Routes"));
const BancosRoutes_1 = __importDefault(require("./Bancos/BancosRoutes"));
const FormPagRoutes_1 = __importDefault(require("./FormPag/FormPagRoutes"));
const RamaisRoutes_1 = __importDefault(require("./Ramais/RamaisRoutes"));
const routes = (0, express_1.Router)();
routes.use('/fat', fatuRoutes_1.default);
routes.use('/fatview', fatu_View_Routes_1.default);
routes.use('/project', projectRoutes_1.default);
routes.use('/projetoView', projectViewRoutes_1.default);
routes.use('/users', usersRoutes_1.default);
routes.use('/usersView', usersViewRoutes_1.default);
routes.use('/session', sessionRoutes_1.default);
routes.use('/password', passwordRoutes_1.default);
routes.use('/cargo', CargoRoutes_1.default);
routes.use('/carros', CarrosRoutes_1.default);
routes.use('/clientes', ClientesRoutes_1.default);
routes.use('/chamados', ChamadosRoutes_1.default);
routes.use('/profile', profileRoutes_1.default);
routes.use('/depart', DepartamentoRoutes_1.default);
routes.use('/atividade', AtividadeRoutes_1.default);
routes.use('/contrato', ContratoRoutes_1.default);
routes.use('/funcionario', FuncionariosRoutes_1.default);
routes.use('/adv', AdvRoutes_1.default);
routes.use('/pagamento', PagamentoRoutes_1.default);
routes.use('/pagamentoView', PagamentoViewRoutes_1.default);
routes.use('/manutencao', ManutencaoRoutes_1.default);
routes.use('/paginas', PaginasRoutes_1.default);
routes.use('/fornecedores', FornecedoresRoutes_1.default);
routes.use('/N1', N1Routes_1.default);
routes.use('/N2', N2Routes_1.default);
routes.use('/N3', N3Routes_1.default);
routes.use('/bancos', BancosRoutes_1.default);
routes.use('/formPag', FormPagRoutes_1.default);
routes.use('/ramais', RamaisRoutes_1.default);
exports.default = routes;
