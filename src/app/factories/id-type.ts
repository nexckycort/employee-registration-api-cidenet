import { IdTypesRepository } from 'infrastructure/repositories/id-types-repository'
import { IdTypeService } from 'domain/services/id-type-service'
import { IdTypeController } from 'infrastructure/entry-points/api/v1/id-type'

export const makeIdTypeController = (): IdTypeController => {
  const idTypesRepository = new IdTypesRepository()
  const idTypeService = new IdTypeService(idTypesRepository)
  const idTypeController = new IdTypeController(idTypeService)
  return idTypeController
}
