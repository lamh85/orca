import { generateModel } from '../model/modelFactory.js'
import { generateDummy } from '../../fixtures/fundTransfers.js'

const tableName = 'funds'
const whiteListedColumns = [
  'id', 'name', 'description', 'transaction_date', 'amount'
]

const model = generateModel({ tableName, whiteListedColumns })

export const createDummy = async (request, response) => {
  try {
    const dummy = generateDummy({})
    response.send(dummy)
  } catch (error) {
    response.send(error)
  }
}

export const index = () => {}