import { encrypt } from './encryption.js'
import { randomString } from '../../helpers/stringHelpers.js'
import { generateModel } from '../model/modelFactory.js'

const whiteListedColumns = [
  'email', 'password_encrypted', 'authentication_token'
]

const model = generateModel({
  tableName: 'users',
  whiteListedColumns
})

const createAuthenticationToken = () => {
  return randomString(20)
}

export const register = ({ email, password }) => {
  const password_encrypted = encrypt(password)
  const authentication_token = createAuthenticationToken()

  const queryParams = {
    email,
    password_encrypted,
    authentication_token
  }

  return model.create(queryParams)
}