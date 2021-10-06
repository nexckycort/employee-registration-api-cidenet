import { FindOptions } from '../helpers/querys/querys.interfaces'

export interface Read<T> {
  find: (options?: FindOptions) => Promise<T[]>
  findByPk: (identifier: number | string, options?: { attributes: string[] }) => Promise<T>
  findOne: (options: FindOptions) => Promise<T>
  count: () => Promise<number>
}
