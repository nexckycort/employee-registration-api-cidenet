import { FindOptions, UpdateOptions } from './querys.interfaces'

export const buildSelect = (options: FindOptions | undefined, table: string): string => {
  let attributes: any
  let where: any
  if (options !== undefined) {
    attributes = options.attributes
    where = Object.keys(options.where).length > 0 ? options.where : undefined
  }
  let whereBuilt = ''
  if (where !== undefined) {
    whereBuilt = buildWhereSelectOrDelete(where)
    whereBuilt = whereBuilt.slice(0, whereBuilt.length - 4)
  }

  const columns: string = attributes === undefined ? '*' : attributes.toString()
  return `SELECT ${columns} 
  FROM ${table}
  ${whereBuilt}`
}

export const buildInsert = (o: any, table: string): string => {
  let keys = ''
  let values = ''

  Object.entries(o).forEach(([key, value]) => {
    keys += `${key},`
    if (typeof value === 'object' && value !== null) {
      values += `'${JSON.stringify(value)}',`
    } else if (typeof value === 'string') {
      values += `'${value}',`
    } else {
      values += `${value as number},`
    }
  })
  keys = keys.slice(0, keys.length - 1)
  values = values.slice(0, values.length - 1)

  return `INSERT INTO ${table}
  (${keys}) 
  VALUES (${values}) RETURNING *`
}

export const buildUpdate = (options: UpdateOptions, table: string): string => {
  delete options.o.id
  let whereBuilt = 'WHERE '
  Object.entries(options.where).forEach(([key, value]) => {
    let dato!: string
    if (typeof value === 'string') {
      dato = `= '${value}'`
    } else if (value === null) {
      dato = ' IS NULL'
    } else {
      dato = `=${value as number}`
    }

    whereBuilt += key + dato + ' AND '
  })
  whereBuilt = whereBuilt.slice(0, whereBuilt.length - 4)

  let values = ''
  Object.entries(options.o).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      values += `${key}='${JSON.stringify(value)}',`
    } else if (typeof value === 'string') {
      values += `${key}='${value}',`
    } else {
      values += `${key}=${value as number},`
    }
  })
  values = values.slice(0, values.length - 1)

  return `UPDATE ${table}
  SET ${values}
  ${whereBuilt} RETURNING *`
}

export const buildDelete = (options: { where: any }, table: string): string => {
  const { where } = options
  let whereBuilt = buildWhereSelectOrDelete(where)
  whereBuilt = whereBuilt.slice(0, whereBuilt.length - 4)

  return `DELETE FROM ${table}
  ${whereBuilt}RETURNING *`
}

const buildWhereSelectOrDelete = (where: any): string => {
  let whereBuilt = 'WHERE '
  Object.entries(where).forEach(([key, value]) => {
    let dato = ''
    if (Array.isArray(value)) {
      dato = ` in (${value.join(',')})`
    } else if (typeof value === 'string') {
      dato = `= '${value}'`
    } else if (value === null) {
      dato = ' IS NULL'
    } else {
      dato = `=${value as number}`
    }

    whereBuilt += key + dato + ' AND '
  })
  return whereBuilt
}

export const findByPk = (identifier: number | string, table: string, options?: { attributes: string[] }): string => {
  let attributes
  if (options !== undefined) {
    attributes = options.attributes.toString()
  } else {
    attributes = '*'
  }
  let id!: number | string
  if (typeof identifier === 'string') id = `'${identifier}'`
  else id = identifier

  return `SELECT ${attributes}
  FROM ${table}
  WHERE id = ${id}`
}

export const deleteByPk = (identifier: number | string, table: string): string => {
  let id!: number | string
  if (typeof identifier === 'string') id = `'${identifier}'`
  else id = identifier

  return `DELETE FROM ${table}
    WHERE id = ${id}
    RETURNING *`
}

export const findColumnsName = (table: string): string => {
  if (table.includes('public.')) table = table.replace('public.', '')
  return `select column_name
  from INFORMATION_SCHEMA.COLUMNS
  where TABLE_SCHEMA = 'public'
  and TABLE_NAME = '${table}'`
}

export const max = (table: string, column: string): string => {
  return `select max(${column}) ${column}
  from ${table}`
}

export const count = (table: string): string => {
  return `select count(1)
  from ${table}`
}
