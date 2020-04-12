import express from 'express'

import { envVariables } from '../config.js'
import * as expensesController from './app/controllers/expensesController.js'

let app = express()
app.use(express.json())

app.get('/', (request, response) => {
  console.log('RECEIVED THIS REQUEST ===========')
  console.log(request)

  response.send('Response!!!')
})

app.post('/expenses', expensesController.create)

const port = envVariables.APP_PORT

const startServer = () => {
  app.listen(port, () => console.log('LISTENING TO PORT ', port))
}

export { startServer }