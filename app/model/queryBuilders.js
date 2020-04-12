import { toSqlArray, toSqlPlaceholder } from './formatters.js'
import { validateColumns, validateId } from './queryValidators.js'

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
  validateId(id)

  const paramKeys = Object.keys(params)
  const columnsArray = toSqlArray(paramKeys)
  validateColumns({
    queryColumns: paramKeys,
    validColumns: whiteListedColumns
  })

  const placeHolder = toSqlPlaceholder(paramKeys)
  const rowValues = Object.values(params)

  // Must use ROW() to prevent this error:
    // source for a multiple-column UPDATE item must be a sub-SELECT or ROW() expression
  // More info: https://www.postgresql.org/message-id/22434.1508854720%40sss.pgh.pa.us
  const queryTemplate = `
    UPDATE ${tableName}
    SET ${columnsArray} = ROW(${placeHolder})
    WHERE id = $${rowValues.length + 1}
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