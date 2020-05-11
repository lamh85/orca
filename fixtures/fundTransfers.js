import * as ipsumLorem from './ipsumLorem.js'
import { randomAmount } from '../helpers/numberHelpers.js'

export const generateDummy = (params = {}) => {
  const base = {
    name: ipsumLorem.randomWords().join(' '),
    description: ipsumLorem.randomWords().join(' '),
    amount: randomAmount()
  }

  const beforeIds = { ...base, ...params }
}

// source_fund_id
// destination_fund_id

// ----------------
// transaction_date