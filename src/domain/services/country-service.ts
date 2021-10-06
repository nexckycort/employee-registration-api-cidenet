import { CountryRepository } from 'infrastructure/repositories/country-repository'
import { ICountryService } from './interfaces/country'

export class CountryService implements ICountryService {
  constructor(private readonly countryRepository: CountryRepository) {}

  async validate(country: number) {
    const countryRecord = await this.countryRepository.findByPk(country)
    return countryRecord !== undefined
  }

  async findAll() {
    const countryRecords = await this.countryRepository.find()
    return countryRecords
  }
}
