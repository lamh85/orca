const httpCodeLookup = {
  QueryError: 400
}

const handleError = ({ error, response }) => {
  console.log('*** PRINTED FROM ERROR HANDLER:')
  console.log(error.trace)

  const constructorName = error.constructor.name
  const httpCode = httpCodeLookup[constructorName]
  const validCode = httpCode || 500

  response.status(validCode).send(error.message)
}

export { handleError }