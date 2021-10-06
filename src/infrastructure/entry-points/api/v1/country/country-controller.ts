import { ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller } from './country-protocols'
import { Logger } from 'infrastructure/helpers/logger'
import { ICountryService } from 'domain/services/interfaces/country'

export class CountryController implements Controller {
  constructor(private readonly countryService: ICountryService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const countryRecords = await this.countryService.findAll()

      return ok({ message: 'obtained countrys', data: countryRecords })
    } catch (error) {
      Logger.error('CountryController', error)
      return serverError(error)
    }
  }
}
