import { generateModel } from '../model/modelFactory.js'

const tableName = 'users'
const whiteListedColumns = [
  'email',
  'password',
  'password_encrypted',
  'password_encryption_key',
  'authentication_token'
]

export const create = async (request, response) => {
  const { email, password } = request.body
}