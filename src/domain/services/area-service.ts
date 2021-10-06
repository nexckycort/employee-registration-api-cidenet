import { AreaRepository } from 'infrastructure/repositories/area-repository'
import { IAreaService } from './interfaces/area'

export class AreaService implements IAreaService {
  constructor(private readonly areaRepository: AreaRepository) {}

  async validate(area: number) {
    const areaRecord = await this.areaRepository.findByPk(area)
    return areaRecord !== undefined
  }

  async findAll() {
    const areaRecords = await this.areaRepository.find()
    return areaRecords
  }
}
