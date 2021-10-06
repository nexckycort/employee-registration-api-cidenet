export interface IIdTypeService {
  validate: (idType: number) => Promise<boolean>
}
