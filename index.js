import express from 'express'

import * as expensesController from './app/controllers/expensesController.js'

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (request, response) => {
  console.log('RECEIVED THIS REQUEST ===========')
  console.log(request)

  response.send('Response!!!')
})

app.post('/expenses', expensesController.create)

app.listen(port, () => console.log('LISTENING TO PORT ', port))