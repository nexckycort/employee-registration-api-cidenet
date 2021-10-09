import { IEmployeeService } from 'domain/services/interfaces/employee'
import { badRequest, ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { Logger } from 'infrastructure/helpers/logger'
import { InvalidParamError } from '../../errors'
import { HttpRequest, HttpResponse, MiddlewareController } from '../../interfaces'

export class IdNumberMiddleware implements MiddlewareController {
  constructor(private readonly roleService: IEmployeeService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { identificationNumber } = httpRequest.body
      const idNumberIsValid = await this.roleService.validateIdNumber(identificationNumber)
      if (idNumberIsValid) return ok()
      else return badRequest(new InvalidParamError('registered identification'))
    } catch (error) {
      Logger.error('IdNumberMiddleware', error)
      return serverError(error)
    }
  }
}
