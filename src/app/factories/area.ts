import { AreaRepository } from 'infrastructure/repositories/area-repository'
import { AreaController } from 'infrastructure/entry-points/api/v1/area'
import { AreaService } from 'domain/services/area-service'

export const makeAreaController = (): AreaController => {
  const areaRepository = new AreaRepository()
  const areaService = new AreaService(areaRepository)
  const areaController = new AreaController(areaService)
  return areaController
}
