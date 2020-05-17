import { envVariables } from '../../config.js'

const {
  ENCRYPTION_ALGORITHM,
  ENCRYPTION_KEY,
  ENCRYPTION_IV
} = envVariables

const UNENCRYPTED_ENCODING = 'utf8'
const ENCRYPTED_ENCODING = 'hex'

export const encrypt = toEncrypt => {
  const cipher = crypto.createCipheriv(
    ENCRYPTION_ALGORITHM,
    ENCRYPTION_KEY,
    ENCRYPTION_IV
  )

  let encrypted = cipher.update(toEncrypt, UNENCRYPTED_ENCODING, ENCRYPTED_ENCODING)
  encrypted += cipher.final(ENCRYPTED_ENCODING)
  return encrypted
}

export const decrypt = toDecrypt => {
  const decipher = crypto.createDecipheriv(
    ENCRYPTION_ALGORITHM,
    ENCRYPTION_KEY,
    ENCRYPTION_IV
  )

  let decrypted = decipher.update(toDecrypt, ENCRYPTED_ENCODING, UNENCRYPTED_ENCODING)
  decrypted += decipher.final(UNENCRYPTED_ENCODING)
  return decrypted
}
