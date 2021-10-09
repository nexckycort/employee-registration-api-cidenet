import { Pool, PoolClient, PoolConfig } from 'pg'

import { Logger } from 'infrastructure/helpers/logger'

let db!: Pool

interface Querys {
  text: string
  values?: string[] | number[] | null[]
}

export const PgHelper = {
  async connect(uri: string, dbName: string, ssl = false): Promise<void> {
    const poolConfig: PoolConfig = {
      connectionString: uri,
      idleTimeoutMillis: 40000,
      max: 2,
      ssl: {
        rejectUnauthorized: ssl
      }
    }
    db = new Pool(poolConfig)
    Logger.info('Connection to the database has been established successfully! ✌️')
  },

  connection: () => db,

  transaction: async (querys: Querys[], client: PoolClient) => {
    try {
      await client.query('BEGIN')
      for (let i = 0; i < querys.length; i++) {
        const query = querys[i]
        await client.query(query.text, query.values)
      }
      await client.query('COMMIT')
    } catch (e) {
      await client.query('ROLLBACK')
      throw e
    } finally {
      client.release()
    }
  },

  async disconnect(): Promise<void> {
    await db.end()
    Logger.info('database disconnected')
  }
}
