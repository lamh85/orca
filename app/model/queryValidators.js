class QueryError extends Error {
  constructor(message) {
    super({
      message,
      httpCode: 400
    })
  }
}

const validateColumns = ({ queryColumns, validColumns }) => {
  const isValid = queryColumns.every(item => validColumns.includes(item))

  if (!isValid) {
    throw new QueryError('At least one invalid column.')
  }
}

const validateId = id => {
  if (id <= 0) {
    throw new QueryError('Invalid ID.')
  }
}

const validateSelectQuery = ({ sortColumn, sortDirection }) => {
  const allArePresent = [sortColumn, sortDirection].every(item => item)
  if (allArePresent) return true

  const allAreMissing = [sortColumn, sortDirection].every(item => !item)
  if (allAreMissing) return true

  throw new QueryError(
    'SELECT query: either sort column or sort direction is missing.'
  )
}

export { validateColumns, validateId, validateSelectQuery }