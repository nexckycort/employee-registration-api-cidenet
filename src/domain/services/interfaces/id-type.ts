import { IdTypes } from 'domain/models/id-types-model'

export interface IIdTypeService {
  validate: (idType: number) => Promise<boolean>
  findAll: () => Promise<IdTypes[]>
}
