import { Country } from 'domain/models/country-model'

export interface ICountryService {
  validate: (country: number) => Promise<boolean>
  findAll: () => Promise<Country[]>
}
