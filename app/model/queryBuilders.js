import { toQueryArrays } from './formatters.js'
import {
  validateColumns,
  validateId,
  validateSelectQuery
} from './queryValidators.js'

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
  validateSelectQuery({ sortColumn, sortDirection })

  let queryTemplate = `SELECT * FROM ${tableName};`
  let placeholderCounter = 1
  let values = []

  if (sortColumn) {
    queryTemplate +=
      ` ORDER BY $${placeholderCounter} $${placeholderCounter + 1}`
    values = [...values, sortColumn, sortDirection]
    placeholderCounter += 2
  }

  const limit = pageSize
  if (limit) {
    queryTemplate += ` LIMIT $${placeholderCounter}`
    values = [...values, limit]
    placeholderCounter += 1
  }

  const offset = (pageNumber - 1) * limit
  if (offset) {
    queryTemplate += ` OFFSET $${placeholderCounter}`
    values = [...values, offset]
  }


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
  validateId(id)

  const queryTemplate = `
    DELETE FROM ${tableName}
    WHERE id = $1
    RETURNING *;
  `

  const values = [id]

  return { queryTemplate, values }
}