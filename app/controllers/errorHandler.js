const handleError = ({ error, response }) => {
  const { message, httpCode } = error
  const validCode = httpCode || 500
  response.status(validCode).send(message)
}

export { handleError }