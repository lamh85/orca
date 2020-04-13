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

export { validateColumns, validateId }