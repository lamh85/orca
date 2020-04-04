import dotenv from 'dotenv'
dotenv.config()

const envVariables = {
  APP_PORT: process.env.APP_PORT,
  PG_USER: process.env.PG_USER,
  PG_HOST: process.env.PG_HOST,
  PG_DATABASE: process.env.PG_DATABASE,
  PG_PASSWORD: process.env.PG_PASSWORD,
  PG_PORT: process.env.PG_PORT
}

export { envVariables }
