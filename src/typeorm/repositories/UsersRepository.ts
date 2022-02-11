import { Repository, EntityRepository } from 'typeorm';

import Usuario from '../entities/users';

@EntityRepository(Usuario)
class UsuarioRepository extends Repository<Usuario> {


}

export default UsuarioRepository;
