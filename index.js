import express from 'express'
import { envVariables } from './config.js'
import * as expensesController from './app/controllers/expensesController.js'
import { pool } from './app/model/databasePool.js'

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
const getDatbaseName = () => {
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

getDatbaseName()

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
  console.log('RECEIVED THIS REQUEST ===========')
  console.log(request)

  response.send('Response!!!')
})

app.post('/expenses', expensesController.create)

const port = envVariables.APP_PORT
app.listen(port, () => console.log('LISTENING TO PORT ', port))