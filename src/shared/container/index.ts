import { container } from "tsyringe";

import AdvRepository from "../infra/typeorm/repositories/AdvRepository";
import AtividadeRepository from "../infra/typeorm/repositories/AtividadeRepository";
import BancosRepository from "../infra/typeorm/repositories/BancosRepository";
import CargoRepository from "../infra/typeorm/repositories/CargoRepository";
import CarrosRepository from "../infra/typeorm/repositories/CarrosRepository";
import ChamadosRepository from "../infra/typeorm/repositories/ChamadosRepository";
import ClientesRepository from "../infra/typeorm/repositories/ClientesRepository";



container.registerSingleton<AdvRepository>('AdvRepository',AdvRepository)
container.registerSingleton<AtividadeRepository>('AtividadeRepository',AtividadeRepository)
container.registerSingleton<BancosRepository>('BancosRepository',BancosRepository)
container.registerSingleton<CargoRepository>('CargoRepository',CargoRepository)
container.registerSingleton<CarrosRepository>('CarrosRepository',CarrosRepository)
container.registerSingleton<ChamadosRepository>('ChamadosRepository',ChamadosRepository)
container.registerSingleton<ClientesRepository>('ClientesRepository',ClientesRepository)