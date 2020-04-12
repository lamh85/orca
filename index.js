import { validateDatabase } from './initializers/database.js'
import { startServer } from './initializers/routes.js'

validateDatabase()
startServer()
