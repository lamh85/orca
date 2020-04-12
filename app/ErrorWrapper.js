class ErrorWrapper extends Error {
  constructor({ message, httpCode }) {
    super(message)
    this.httpCode = httpCode
  }
}

export { ErrorWrapper }