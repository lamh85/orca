import { envVariables } from '../../../config.js'

import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  user: envVariables.PG_USER,
  host: envVariables.PG_HOST,
  database: envVariables.PG_DATABASE,
  password: envVariables.PG_PASSWORD || null,
  port: envVariables.PG_PORT
})

export { pool }