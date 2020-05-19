import { register } from '../services/authentication.js'

export const create = async (request, response) => {
  const params = request.body
  const registrationResult = register(params)
  response.send(registrationResult)
}