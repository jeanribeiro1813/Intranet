import { container } from "tsyringe";

import AdvRepository from "../infra/typeorm/repositories/AdvRepository";
import AtividadeRepository from "../infra/typeorm/repositories/AtividadeRepository";
import BancosRepository from "../infra/typeorm/repositories/BancosRepository";
import CargoRepository from "../infra/typeorm/repositories/CargoRepository";
import CarrosRepository from "../infra/typeorm/repositories/CarrosRepository";
import ChamadosRepository from "../infra/typeorm/repositories/ChamadosRepository";
import ClientesRepository from "../infra/typeorm/repositories/ClientesRepository";
import ContratoRepository from "../infra/typeorm/repositories/ContratoRepository";
import DepartamentoRepository from "../infra/typeorm/repositories/DepartamentoRepository";
import DiasRepository from "../infra/typeorm/repositories/DiasRepository";
import FaturamentoRepository from "../infra/typeorm/repositories/FaturamentoRepository";
import FaturamentoViewsRepository from "../infra/typeorm/repositories/FaturamentoViewsRepository";
import FormPagRepository from "../infra/typeorm/repositories/FormPagRepository";
import FornecedoresRepository from "../infra/typeorm/repositories/FornecedoresRepository";
import ManuntencoesRepository from "../infra/typeorm/repositories/ManuntencoesRepository";
import N1Repository from "../infra/typeorm/repositories/N1Repository";
import N2Repository from "../infra/typeorm/repositories/N2Repository";
import N3Repository from "../infra/typeorm/repositories/N3Repository";
import PagamentoRepository from "../infra/typeorm/repositories/PagamentoRepository";
import PagamentoViewRepository from "../infra/typeorm/repositories/PagamentoViewRepository";
import PaginaRepository from "../infra/typeorm/repositories/PaginaRepository";
import ProjetosRepository from "../infra/typeorm/repositories/ProjetosRepository";
import ProjetosViewRepository from "../infra/typeorm/repositories/ProjetosViewRepository";
import RamaisRepository from "../infra/typeorm/repositories/RamaisRepository";
import ReservaRepository from "../infra/typeorm/repositories/ReservaRepository";
import UserTokenRepository from "../infra/typeorm/repositories/UserTokenRepository";
import UsersRepository from "../infra/typeorm/repositories/UsersRepository";
import UsersViewRepository from "../infra/typeorm/repositories/UsersViewRepository";


container.registerSingleton<AdvRepository>('AdvRepository',AdvRepository)
container.registerSingleton<AtividadeRepository>('AtividadeRepository',AtividadeRepository)
container.registerSingleton<BancosRepository>('BancosRepository',BancosRepository)
container.registerSingleton<CargoRepository>('CargoRepository',CargoRepository)
container.registerSingleton<CarrosRepository>('CarrosRepository',CarrosRepository)
container.registerSingleton<ChamadosRepository>('ChamadosRepository',ChamadosRepository)
container.registerSingleton<ClientesRepository>('ClientesRepository',ClientesRepository)

container.registerSingleton<ContratoRepository>('ContratoRepository',ContratoRepository)
container.registerSingleton<DepartamentoRepository>('DepartamentoRepository',DepartamentoRepository)
container.registerSingleton<DiasRepository>('DiasRepository',DiasRepository)
container.registerSingleton<FaturamentoRepository>('FaturamentoRepository',FaturamentoRepository)
container.registerSingleton<FaturamentoViewsRepository>('FaturamentoViewsRepository',FaturamentoViewsRepository)
container.registerSingleton<FormPagRepository>('FormPagRepository',FormPagRepository)
container.registerSingleton<FornecedoresRepository>('FornecedoresRepository',FornecedoresRepository)
container.registerSingleton<ManuntencoesRepository>('ManuntencoesRepository',ManuntencoesRepository)
container.registerSingleton<N1Repository>('N1Repository',N1Repository)
container.registerSingleton<N2Repository>('N2Repository',N2Repository)
container.registerSingleton<N3Repository>('N3Repository',N3Repository)
container.registerSingleton<PagamentoRepository>('PagamentoRepository',PagamentoRepository)
container.registerSingleton<PagamentoViewRepository>('PagamentoViewRepository',PagamentoViewRepository)
container.registerSingleton<PaginaRepository>('PaginaRepository',PaginaRepository)
container.registerSingleton<ProjetosRepository>('ProjetosRepository',ProjetosRepository)
container.registerSingleton<ProjetosViewRepository>('ProjetosViewRepository',ProjetosViewRepository)
container.registerSingleton<RamaisRepository>('RamaisRepository',RamaisRepository)
container.registerSingleton<ReservaRepository>('ReservaRepository',ReservaRepository)
container.registerSingleton<UserTokenRepository>('UserTokenRepository',UserTokenRepository)
container.registerSingleton<UsersRepository>('UsersRepository',UsersRepository)
container.registerSingleton<UsersViewRepository>('UsersViewRepository',UsersViewRepository)