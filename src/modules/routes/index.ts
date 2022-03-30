import {Router} from 'express';

import fatuRouter from './fatuRoutes';
import projectRoutes from './projectRoutes';
import usersRoutes from './usersRoutes';
import sessionRoutes from './sessionRoutes';
import passwordRouter from './passwordRoutes'



const routes = Router();

routes.use('/fat',fatuRouter);
routes.use('/project',projectRoutes);
routes.use('/users',usersRoutes);
routes.use('/session',sessionRoutes);
routes.use('/password',passwordRouter);



export default routes;
