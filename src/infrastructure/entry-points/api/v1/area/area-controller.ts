import { ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller } from './area-protocols'
import { Logger } from 'infrastructure/helpers/logger'
import { IAreaService } from 'domain/services/interfaces/area'

export class AreaController implements Controller {
  constructor(private readonly areaService: IAreaService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const areaRecords = await this.areaService.findAll()

      return ok({ message: 'obtained areas', data: areaRecords })
    } catch (error) {
      Logger.error('AreaController', error)
      return serverError(error)
    }
  }
}
