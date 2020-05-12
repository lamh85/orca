import { generateDummy } from '../../fixtures/fundTransfers.js'

export const createDummy = async (request, response) => {
  try {
    const dummy = generateDummy({})
    response.send(dummy)
  } catch (error) {
    response.send(error)
  }
}