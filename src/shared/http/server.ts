import 'reflect-metadata';

import express, {Request, Response, NextFunction}  from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '../../modules/routes';
import AppError from '../errors/AppErrors';

import '../database';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error:Error , request:Request, response:Response, next:NextFunction) =>{

  if (error instanceof AppError){
    return response.status(error.statusCode).json({
      status: 'Error',
      message: error.message
    });
  }

  return response.status(500).json({
    status:'Error Server',
    message: 'Erro no servidor Interno'
  })

}
)

app.listen(3333, ()=>{
    console.log('Server started on port 3333!')
});
