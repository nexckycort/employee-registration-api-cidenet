import { RoleMiddleware } from './roles-middleware'
import { RoleRepository } from 'infrastructure/repositories/role-repository'
import { RoleService } from 'domain/services/role-service'

export const makeRoleMiddleware = (): RoleMiddleware => {
  const roleRepository = new RoleRepository()
  const roleService = new RoleService(roleRepository)
  const roleMiddleware = new RoleMiddleware(roleService)
  return roleMiddleware
}
