import { ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller } from './id-type-protocols'
import { Logger } from 'infrastructure/helpers/logger'
import { IIdTypeService } from 'domain/services/interfaces/id-type'

export class IdTypeController implements Controller {
  constructor(private readonly idTypeService: IIdTypeService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const idTypeRecords = await this.idTypeService.findAll()

      return ok({ message: 'obtained id types', data: idTypeRecords })
    } catch (error) {
      Logger.error('IdTypeController', error)
      return serverError(error)
    }
  }
}
