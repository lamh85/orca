import { toQueryArrays } from './formatters.js'
import { validateColumns, validateId } from './queryValidators.js'

export const toInsertQuery = ({ rowObj, tableName, validColumns }) => {
  const {
    columns,
    values,
    columnsString,
    placeholder
  } = toQueryArrays(rowObj)

  validateColumns({ queryColumns: columns, validColumns })

  const queryTemplate = `
    INSERT INTO ${tableName} ${columnsString}
      VALUES ${placeholder}
    RETURNING *;
  `

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

  const {
    columns,
    values,
    columnsString,
    placeholder
  } = toQueryArrays(params)

  validateColumns({
    queryColumns: columns,
    validColumns: whiteListedColumns
  })

  // Must use ROW() to prevent this error:
  //   source for a multiple-column UPDATE item must be a sub-SELECT or ROW() expression
  // More info: https://www.postgresql.org/message-id/22434.1508854720%40sss.pgh.pa.us
  const queryTemplate = `
    UPDATE ${tableName}
    SET ${columnsString} = ROW(${placeholder})
    WHERE id = $${values.length + 1}
    RETURNING *;
  `

  const valuesWithId = [...values, id]

  return { queryTemplate, values: valuesWithId }
}

export const toDeleteQuery = ({ id, tableName }) => {
  const queryTemplate = `
    DELETE FROM ${tableName}
    WHERE id = $1
    RETURNING *;
  `

  const values = [id]

  return { queryTemplate, values }
}