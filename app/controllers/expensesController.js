import { generateModel } from '../model/modelFactory.js'

const tableName = 'expenses'
const whiteListedColumns = [
  'name', 'description', 'amount', 'period_length', 'period_units'
]

const model = generateModel({ tableName, whiteListedColumns })

export const create = async (request, response) => {
  const modelResponse = await model.create(request.body)
  console.log(modelResponse)
  response.send(modelResponse)
}