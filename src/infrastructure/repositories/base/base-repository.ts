import { Write } from 'infrastructure/repositories/base/interfaces/write'
import { Read } from 'infrastructure/repositories/base/interfaces/read'

import { PgHelper } from 'infrastructure/driven-adapters/pg-adapter/pg-helper'
import * as querys from './helpers/querys'
import { FindOptions, UpdateOptions } from './helpers/querys/querys.interfaces'

export abstract class BaseRepository<T> implements Write<T>, Read<T> {
  constructor(private readonly tableName: string, readonly db = PgHelper.connection()) {}

  async create(item: T): Promise<T> {
    const q = querys.buildInsert(item, this.tableName)
    const { rows } = await this.db.query(q)
    return rows[0] as T
  }

  async update(options: UpdateOptions): Promise<T> {
    const q = querys.buildUpdate(options, this.tableName)
    const { rows } = await this.db.query(q)
    return rows[0] as T
  }

  async delete(filter: any): Promise<boolean> {
    throw new Error('not')
  }

  async find(data: any): Promise<T[]> {
    throw new Error('not')
  }

  async findOne(options: FindOptions): Promise<T> {
    const q = querys.buildSelect(options, this.tableName)
    const { rows } = await this.db.query(q)
    return rows[0] as T
  }

  async findByPk(identifier: number | string, options?: { attributes: string[] }): Promise<T> {
    const q = querys.findByPk(identifier, this.tableName, options)
    const { rows } = await this.db.query(q)
    return rows[0] as T
  }

  async count(): Promise<number> {
    const q = querys.count(this.tableName)
    const { rows } = await this.db.query<{ count: number }>(q)
    return +rows[0].count
  }
}
