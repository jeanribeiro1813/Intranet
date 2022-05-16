import { container } from "tsyringe";

import AdvRepository from "../infra/typeorm/repositories/AdvRepository";


container.registerSingleton<AdvRepository>('AdvRepository',AdvRepository)