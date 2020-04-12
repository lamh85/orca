import { envVariables } from '../config.js'
import { pool } from '../app/model/databasePool.js'

const validateDbName = connectedDb => {
  console.log('------------------------')
  if (connectedDb != envVariables.PG_DATABASE) {
    console.log(`Connected to wrong database! Connected to: ${connectedDb}`)
  } else {
    console.log('Connected to correct database!')
  }
}

// node-postgress connects to wrong database if pool is configured with the wrong password.
// Therefore, need to check if connected to correct database
const validateDatabase = () => {
  pool.query('SELECT * FROM current_database();', (err, res) => {
    if (err) {
      console.log('-----------------')
      console.log('ERROR: CANNOT CONNECT TO DATABASE!')
    } else if (res) {
      const connectedDb = res.rows[0].current_database
      validateDbName(connectedDb)
    }
  })
}

export { validateDatabase }
