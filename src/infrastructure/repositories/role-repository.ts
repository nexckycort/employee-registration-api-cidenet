import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { Rol } from 'domain/models/rol-model'

export class RoleRepository extends BaseRepository<Rol> {
  constructor() {
    super('roles')
  }
}
