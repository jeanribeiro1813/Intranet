import { Router } from 'express';

import FatController from '../controllers/FaturamentoControllers/FatController';
import DeleteControllerService from '../controllers/FaturamentoControllers/DeleteController';

const fatRouter = Router();

const fatController = new FatController();
const deleteController = new DeleteControllerService();

//Create
fatRouter.post('/create',fatController.create);

//Loading
fatRouter.get('/load',fatController.loading);

//update
fatRouter.post('/update/:cod_fat',fatController.update);

//Delete
fatRouter.delete('/delete/:cod_fat', deleteController.delete);

//Summary Objeto
fatRouter.get('/summary',fatController.execute);

//Return Por Index
fatRouter.get('/index/:cod_fat',fatController.index);




export default fatRouter;
