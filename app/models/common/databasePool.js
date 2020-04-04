import { envVariables } from '../../../config.js'

import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  user: envVariables.pgUser,
  host: envVariables.pgHost,
  database: envVariables.pgDatabase,
  port: envVariables.pgPort
})

export { pool }