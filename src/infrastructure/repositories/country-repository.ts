import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { Country } from 'domain/models/country-model'

export class CountryRepository extends BaseRepository<Country> {
  constructor() {
    super('countrys')
  }
}
