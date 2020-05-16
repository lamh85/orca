const DIRECTORY_NAME = '/users'

export const generateRoutes = app => {
  app.create(DIRECTORY_NAME, async (request, response) => {
    console.log(request.body)
  })
}