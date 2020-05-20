import { create } from '../controllers/usersController.js'

const DIRECTORY_NAME = '/users/'

export const generateRoutes = app => {
  app.post(DIRECTORY_NAME, create)
}