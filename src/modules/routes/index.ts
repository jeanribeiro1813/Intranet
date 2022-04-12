import {Router} from 'express';

import fatuRouter from './Faturamento/fatuRoutes';
import projectRoutes from './Projeto/projectRoutes';
import usersRoutes from './Usuario/usersRoutes';
import sessionRoutes from './Usuario/sessionRoutes';
import passwordRouter from './Usuario/passwordRoutes'
import cargoRouter from './Cargo/CargoRoutes';
import carrosRouter from './Carros/CarrosRoutes';
import clientesRouter from './Clientes/ClientesRoutes';
import chamadosRouter from './Chamados/ChamadosRoutes';
import profileRouter  from './Profiles/profileRoutes';
import fatview from './Faturamento/fatu.View.Routes';
import departRouter from './Departamento/DepartamentoRoutes';
import atividadeRouter from './Atividade/AtividadeRoutes';
import contratoRouter from './Contrato/ContratoRoutes';
import funcionarioRouter from './Funcionarios/FuncionariosRoutes';
import advRouter from './Adv/AdvRoutes';
import pagamentoRouter from './Pagamento/PagamentoRoutes';
import manutencaoRouter from './Manutencao/ManutencaoRoutes';
import paginascaoRouter from './Paginas/PaginasRoutes';
import fornecedoresRoutes from './Fornecedores/FornecedoresRoutes';








const routes = Router();

routes.use('/fat',fatuRouter);
routes.use('/fatview',fatview);
routes.use('/project',projectRoutes);
routes.use('/users',usersRoutes);
routes.use('/session',sessionRoutes);
routes.use('/password',passwordRouter);
routes.use('/cargo',cargoRouter);
routes.use('/carros',carrosRouter);
routes.use('/clientes',clientesRouter);
routes.use('/chamados',chamadosRouter);
routes.use('/profile',profileRouter);
routes.use('/depart',departRouter);
routes.use('/atividade',atividadeRouter);
routes.use('/contrato',contratoRouter);
routes.use('/funcionario',funcionarioRouter);
routes.use('/adv',advRouter);
routes.use('/pagamento',pagamentoRouter);
routes.use('/manutencao',manutencaoRouter);
routes.use('/paginas',paginascaoRouter);
routes.use('/fornecedores',fornecedoresRoutes);






export default routes;
