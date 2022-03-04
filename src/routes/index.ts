import {Router} from 'express';

import cargoRoutes from './cargo.routes';



const routes = Router();

routes.use('/cargo',cargoRoutes);




export default routes;