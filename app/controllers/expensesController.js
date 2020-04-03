import * as model from '../models/expenses.js'

export const create = async (request, response) => {
  const modelResponse = await model.create(request.body)
  console.log(modelResponse)
  response.send(modelResponse)
}