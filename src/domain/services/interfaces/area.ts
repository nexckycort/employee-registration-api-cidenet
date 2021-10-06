import { Area } from 'domain/models/area-model'

export interface IAreaService {
  validate: (area: number) => Promise<boolean>
  findAll: () => Promise<Area[]>
}
