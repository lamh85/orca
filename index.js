const express = require('express')

const app = express()
const port = 3000

app.get('/', (request, response) => {
  console.log('RECEIVED THIS REQUEST ===========')
  console.log(request)

  response.send('Response!!!')
})

app.listen(port, () => console.log('LISTENING TO PORT ', port))