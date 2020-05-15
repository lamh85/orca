import * as ipsumLorem from './ipsumLorem.js'
import { randomAmount } from '../helpers/numberHelpers.js'

// Must line break between arguments when specifying default
// values for destructured arguments. Otherwise Node won't
// run the function.
export const generateDummy = ({
  params = {},
  isNegative = true
}) => {
  let randomNumber = randomAmount()
  if (isNegative) {
    randomNumber = randomNumber * -1
  }

  const base = {
    name: ipsumLorem.randomWords().join(' '),
    description: ipsumLorem.randomWords().join(' '),
    amount: randomNumber
  }

  return { ...base, ...params }
}