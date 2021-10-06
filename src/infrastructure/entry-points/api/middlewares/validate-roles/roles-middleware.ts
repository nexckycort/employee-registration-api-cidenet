import { IRoleService } from 'domain/services/interfaces/rol'
import { badRequest, ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { Logger } from 'infrastructure/helpers/logger'
import { InvalidParamError } from '../../errors'
import { HttpRequest, HttpResponse, MiddlewareController } from '../../interfaces'

export class RoleMiddleware implements MiddlewareController {
  constructor(private readonly roleService: IRoleService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { role } = httpRequest.body
      const roleIsValid = await this.roleService.validate(+role)
      if (roleIsValid) return ok()
      else return badRequest(new InvalidParamError('role is not valid'))
    } catch (error) {
      Logger.error('RolesMiddleware', error)
      return serverError(error)
    }
  }
}
