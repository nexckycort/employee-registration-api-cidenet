import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { Area } from 'domain/models/area-model'

export class AreaRepository extends BaseRepository<Area> {
  constructor() {
    super('areas')
  }
}
