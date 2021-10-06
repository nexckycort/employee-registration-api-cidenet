import { PgHelper } from 'infrastructure/driven-adapters/pg-adapter/pg-helper'
import { Logger } from 'infrastructure/helpers/logger'
import { api, pg } from 'app/config/environment'

export const loaders = async (): Promise<void> => {
  await PgHelper.connect(pg.uri, pg.dbName, pg.ssl)

  Logger.info(`API PREFIX: ${api.prefixV1}`)
}
