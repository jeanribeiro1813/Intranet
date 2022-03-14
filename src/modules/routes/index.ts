import {Router} from 'express';

import fatRouter from './faturoutes';



const routes = Router();

routes.use('/fat',fatRouter);





export default routes;