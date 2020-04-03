import dotenv from 'dotenv'
dotenv.config()

const envVariables = {
  appPort: process.env.APP_PORT,
  pgUser: process.env.PG_USER,
  pgHost: process.env.PG_HOST,
  pgDatabase: process.env.PG_DATABASE,
  pgPassword: process.env.PG_PASSWORD,
  pgPort: process.env.PG_PORT
}

export { envVariables }
