import { RoleRepository } from 'infrastructure/repositories/role-repository'
import { IRoleService } from './interfaces/rol'

export class RoleService implements IRoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async validate(role: number) {
    const roleRecord = await this.roleRepository.findByPk(role)
    return roleRecord !== undefined
  }
}
