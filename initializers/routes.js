import express from 'express'

import { envVariables } from '../config.js'
import * as fundsController from '../app/controllers/fundsController.js'
import * as fundTransfersController from '../app/controllers/fundTransfersController.js'

let app = express()
app.use(express.json())

app.get('/', (request, response) => {
  console.log('RECEIVED THIS REQUEST ===========')
  console.log(request)

  response.send('Response!!!')
})

app.post('/funds', fundsController.create)
app.post('/funds/dummy', fundsController.createDummy)
app.get('/funds', fundsController.index)
app.patch('/funds/:id', fundsController.update)
app.delete('/funds/:id', fundsController.destroy)

app.post('/fund_transfers/dummy', fundTransfersController.createDummy)

const port = envVariables.APP_PORT

const startServer = () => {
  app.listen(port, () => console.log('LISTENING TO PORT ', port))
}

export { startServer }
