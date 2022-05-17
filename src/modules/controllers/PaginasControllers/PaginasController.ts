import { Request, Response } from 'express';
import CreatePaginasServices from '../../services/Paginas/Paginas/CreatePaginasServices';
import UpdatePaginasServices from '../../services/Paginas/Paginas/UpdatePaginasServices';
import LoadSummyService  from '../../services/Paginas/Paginas_View/LoadSummyService';
import DeletePaginasServices from '../../services/Paginas/Paginas/DeletePaginasServices';
import { container } from "tsyringe";



export default class PaginasController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = container.resolve( LoadSummyService)

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {cod_page_uuid,pagina,descricao,banner,cod_page} = request.body;

        const service = container.resolve( CreatePaginasServices);

        const result = await service.create(
          {
            cod_page_uuid,pagina,descricao,banner,cod_page              

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {cod_page_uuid} = request.params

        const {pagina,descricao,banner,cod_page} = request.body

        const updateFatu = container.resolve( UpdatePaginasServices);

        const fatura = await updateFatu.update(

          {
            cod_page_uuid,pagina,descricao,banner,cod_page
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {cod_page_uuid} = request.params;

        const deleteAtividade = container.resolve( DeletePaginasServices);

        await deleteAtividade.delete({cod_page_uuid});

        return response.json('Delete realizado com sucesso');
      }


    
  }




