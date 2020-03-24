const express = require('express')
const { Pool } = require('pg')

const app = express()
const port = 3000

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

app.get('/', (request, response) => {
  console.log('RECEIVED THIS REQUEST ===========')
  console.log(request)

  response.send('Response!!!')
})

app.listen(port, () => console.log('LISTENING TO PORT ', port))