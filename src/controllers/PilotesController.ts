import { Request, Response } from 'express';
import LoadPiloteByIdService from '../services/Pilotes/LoadPiloteByIdService';
import LoadPiloDescPontos from '../services/Pilotes/LoadDescPontos';


export default class PilotesController {

  public async loadById(request: Request, response: Response): Promise<Response> {

    const {id} = request.body;

    const loadPiloteById = new LoadPiloteByIdService();

    const pilote = await loadPiloteById.execute({id});

    return response.json(pilote);
  }

  // public async upById (request: Request , response: Response){

  //   const {id} = request.params;
  //   //Organizado em Ordem para fazer o update
  //   const{ordem_serv,mod_viaduto,locali,descri,tipologia,pilha,e,n,subcontra,parede_guia,inicio_perfu,vazio,cls,
  //     long_metro,diam,rend_metro_dia,status,maquina,ensaio_csl,obs,latitude,longitude} = request.body;

  //   const UpdateService = new UpPilotesByIdService;

  //   const pilote = await UpdateService.saved({id,ordem_serv,mod_viaduto,locali,descri,tipologia,pilha,e,n,subcontra,parede_guia,inicio_perfu,vazio,cls,
  //     long_metro,diam,rend_metro_dia,status,maquina,ensaio_csl,obs});

  //   return response.json(pilote);


  // }

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadPilotes = new LoadPiloDescPontos();

    const pilotes = await loadPilotes.executeDes();

    return response.json(pilotes);
  }
}



