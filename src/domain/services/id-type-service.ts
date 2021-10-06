import { IdTypesRepository } from 'infrastructure/repositories/id-types-repository'
import { IIdTypeService } from './interfaces/id-type'

export class IdTypeService implements IIdTypeService {
  constructor(private readonly idTypesRepository: IdTypesRepository) {}

  async validate(idType: number) {
    const countryRecord = await this.idTypesRepository.findByPk(idType)
    return countryRecord !== undefined
  }

  async findAll() {
    const idTypeRecords = await this.idTypesRepository.find()
    return idTypeRecords
  }
}
