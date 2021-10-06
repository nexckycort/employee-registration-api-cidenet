import { CountryController } from 'infrastructure/entry-points/api/v1/country'
import { CountryRepository } from 'infrastructure/repositories/country-repository'
import { CountryService } from 'domain/services/country-service'

export const makeCountryController = (): CountryController => {
  const countryRepository = new CountryRepository()
  const countryService = new CountryService(countryRepository)
  const countryController = new CountryController(countryService)
  return countryController
}
