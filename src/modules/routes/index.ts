import {Router} from 'express';

import fatuRouter from './Faturamento/fatuRoutes';
import projectRoutes from './Projeto/projectRoutes';
import usersRoutes from './Usuario/usersRoutes';
import sessionRoutes from './Usuario/sessionRoutes';
import passwordRouter from './Usuario/passwordRoutes'
import cargoRouter from './Cargo/CargoRoutes';
import carrosRouter from './Carros/CarrosRoutes';



const routes = Router();

routes.use('/fat',fatuRouter);
routes.use('/project',projectRoutes);
routes.use('/users',usersRoutes);
routes.use('/session',sessionRoutes);
routes.use('/password',passwordRouter);
routes.use('/cargo',cargoRouter);
routes.use('/carros',carrosRouter);



export default routes;
