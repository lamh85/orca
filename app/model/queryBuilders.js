import { toSqlArray, toSqlPlaceholder } from './formatters.js'

const validateColumns = ({ queryColumns, validColumns }) => {
  const isValid = queryColumns.every(item => validColumns.includes(item))

  if (!isValid) 'At least one invalid column.'
}

export const toInsertQuery = ({ rowObj, tableName, validColumns }) => {
  const queryColumns = Object.keys(rowObj)

  validateColumns({ queryColumns, validColumns })

  const columnsArray = toSqlArray(queryColumns)
  const placeHolder = toSqlPlaceholder(queryColumns)

  const queryTemplate = `
    INSERT INTO ${tableName} ${columnsArray}
      VALUES ${placeHolder}
    RETURNING *;
  `

  const values = Object.values(rowObj)

  return { queryTemplate, values }
}

export const toSelectQuery = ({ modifiers, tableName }) => {
  const { pageNumber, pageSize, sortColumn, sortDirection } = modifiers
  const limit = pageSize
  const offset = (pageNumber - 1) * limit

  const queryTemplate = `
    SELECT * FROM ${tableName}
    ORDER BY $1 $2
    LIMIT $3
    OFFSET $4;
  `

  const values = [sortColumn, sortDirection, limit, offset]

  return { queryTemplate, values }
}

export const toUpdateQuery = ({ id, params, tableName, whiteListedColumns }) => {
  const columnsArray = toSqlArray(columns)
  validateColumns({ columnsArray, whiteListedColumns })

  const placeHolder = toSqlPlaceholder(columns)
  const rowValues = Object.keys(params)

  const queryTemplate = `
    UPDATE ${tableName}
    SET ${columnsArray} = ${placeHolder}
    WHERE id = ${rowValues.length + 1}
    RETURNING *;
  `

  const values = [...rowValues, id]

  return { queryTemplate, values }
}

export const toDeleteQuery = ({ id, tableName }) => {
  const queryTemplate = `
    DELETE FROM ${tableName}
    WHERE id = $1;
  `

  const values = [id]

  return { queryTemplate, values }
}