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

const validateSortCombination = ({ sortColumn, sortDirection }) => {
  const allAreMissing = [sortColumn, sortDirection].every(item => !item)
  if (allAreMissing) return true

  if (!['asc', 'ASC', 'desc', 'DESC'].includes(sortDirection)) {
    throw new QueryError('Sort direction is invalid.')
  }

  return true
}

const validateSelectQuery = ({ sortColumn, sortDirection }) => {
  // TODO: validate:
  // sortColumn should be a white listed column

  const allArePresent = [sortColumn, sortDirection].every(item => item)
  if (allArePresent) return true

  const allAreMissing = [sortColumn, sortDirection].every(item => !item)
  if (allAreMissing) return true

  throw new QueryError(
    'SELECT query: either sort column or sort direction is missing.'
  )
}

export { validateColumns, validateId, validateSelectQuery }