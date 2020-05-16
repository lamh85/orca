import { validateDatabase } from './initializers/database.js'
import { startServer } from './initializers/serverBuilder.js'

validateDatabase()
startServer()
