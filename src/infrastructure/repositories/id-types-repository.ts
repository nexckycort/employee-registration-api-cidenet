import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { IdTypes } from 'domain/models/id-types-model'

export class IdTypesRepository extends BaseRepository<IdTypes> {
  constructor() {
    super('id_types')
  }
}
