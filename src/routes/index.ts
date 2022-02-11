import {Router} from 'express';

import cargoRoutes from './cargo.routes';
import usuarioRouter from './usuario.routes'


const routes = Router();

routes.use('/cargo',cargoRoutes);
routes.use('/usuario',usuarioRouter);



export default routes;