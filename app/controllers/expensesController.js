import { generateModel } from '../model/modelFactory.js'
import { handleError } from './errorHandler.js'
import { generateDummy } from '../../fixtures/expenses.js'

const tableName = 'expenses'
const whiteListedColumns = [
  'name', 'description', 'amount', 'period_length', 'period_units'
]

const model = generateModel({ tableName, whiteListedColumns })

export const create = async (request, response) => {
  try {
    const modelResponse = await model.create(request.body)
    response.send(modelResponse)
  } catch (error) {
    handleError({ error, response })
  }
}

export const createDummy = async (request, response) => {
  try {
    const dummy = generateDummy(request.body)
    const modelResponse = await model.create(dummy)
    response.send(modelResponse)
  } catch (error) {
    handleError({ error, response })
    response.send(error)
  }
}

export const index = async (request, response) => {
  try {
    const modelResponse = await model.where(request.body)
    response.send(modelResponse)
  } catch (error) {
    handleError({ error, response })
  }
}

export const update = async (request, response) => {
  try {
    const { id } = request.params
    const modelResponse = await model.update({
      id,
      params: request.body
    })

    response.send(modelResponse)
  } catch (error) {
    handleError({ error, response })
  }
}

export const destroy = async (request, response) => {
  try {
    const { id } = request.params
    const modelResponse = await model.destroy(id)
    response.send(modelResponse)
  } catch (error) {
    handleError({ error, response })
  }
}