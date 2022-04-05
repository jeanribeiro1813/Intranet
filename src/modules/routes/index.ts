import {Router} from 'express';

import fatuRouter from './Faturamento/fatuRoutes';
import projectRoutes from './Projeto/projectRoutes';
import usersRoutes from './Usuario/usersRoutes';
import sessionRoutes from './Usuario/sessionRoutes';
import passwordRouter from './Usuario/passwordRoutes'
import cargoRouter from './Cargo/CargoRoutes';
import carrosRouter from './Carros/CarrosRoutes';
import clientes from './Clientes/ClientesRoutes';
import chamados from './Chamados/ChamadosRoutes';
import profile  from './Profiles/profileRoutes';
import fatview from './Faturamento/fatu.View.Routes';
import depart from './Departamento/DepartamentoRoutes';
import atividade from './Atividade/AtividadeRoutes';




const routes = Router();

routes.use('/fat',fatuRouter);
routes.use('/fatview',fatview);
routes.use('/project',projectRoutes);
routes.use('/users',usersRoutes);
routes.use('/session',sessionRoutes);
routes.use('/password',passwordRouter);
routes.use('/cargo',cargoRouter);
routes.use('/carros',carrosRouter);
routes.use('/clientes',clientes);
routes.use('/chamados',chamados);
routes.use('/profile',profile);
routes.use('/depart',depart);
routes.use('/ativ',atividade);


export default routes;
