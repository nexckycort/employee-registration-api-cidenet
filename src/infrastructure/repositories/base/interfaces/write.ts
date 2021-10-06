import { UpdateOptions } from '../helpers/querys/querys.interfaces'

export interface Write<T> {
  create: (item: T) => Promise<T>
  update: (options: UpdateOptions) => Promise<T>
  delete: (filter: any) => Promise<boolean>
}
