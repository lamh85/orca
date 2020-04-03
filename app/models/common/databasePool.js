import { envVariables } from '../../../config.js'

import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  user: envVariables.PG_USER,
  host: envVariables.PG_HOST,
  database: envVariables.PG_DATABASE,
  port: envVariables.PG_PORT
})

// Test database connection
// TODO: node-postgress connects to wrong database if pool is configured with the wrong password.
// Therefore, need to check if connected to correct database
pool.query('SELECT * FROM current_database();', (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
})

export { pool }