import { Write } from 'infrastructure/repositories/base/interfaces/write'
import { Read } from 'infrastructure/repositories/base/interfaces/read'

import { PgHelper } from 'infrastructure/driven-adapters/pg-adapter/pg-helper'
import * as querys from './helpers/querys'
import { FindOptions, UpdateOptions } from './helpers/querys/querys.interfaces'

export abstract class BaseRepository<T> implements Write<T>, Read<T> {
  constructor(private readonly tableName: string, readonly db = PgHelper.connection()) {}

  async create(item: T) {
    const q = querys.buildInsert(item, this.tableName)
    const { rows } = await this.db.query(q)
    return rows[0] as T
  }

  async update(options: UpdateOptions) {
    const q = querys.buildUpdate(options, this.tableName)
    const { rows } = await this.db.query(q)
    return rows[0] as T
  }

  async delete(filter: any): Promise<boolean> {
    throw new Error('not')
  }

  async find(options?: FindOptions) {
    const q = querys.buildSelect(options, this.tableName)
    const { rows } = await this.db.query(q)
    return rows as T[]
  }

  async findOne(options: FindOptions) {
    const q = querys.buildSelect(options, this.tableName)
    const { rows } = await this.db.query(q)
    return rows[0] as T
  }

  async findByPk(identifier: number | string, options?: { attributes: string[] }) {
    const q = querys.findByPk(identifier, this.tableName, options)
    const { rows } = await this.db.query(q)
    return rows[0] as T
  }

  async count(where?: any) {
    const q = querys.count(this.tableName, where)
    const { rows } = await this.db.query<{ count: number }>(q)
    return +rows[0].count
  }
}
