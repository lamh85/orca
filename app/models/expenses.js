import { pool } from './common/databasePool.js'
import { toSqlArray, toSqlPlaceholder } from './common/formatters.js'

const WHITELISTED_COLUMNS = [
  'name', 'description', 'amount', 'period_length', 'period_units'
]

const areValidColumns = request => {
  return request.every(item => WHITELISTED_COLUMNS.includes(item))
}

// See https://node-postgres.com/features/queries
// INSERT INTO expenses (name, description, amount, period_length, period_units) VALUES($1, $2, $3, $4, $5);
export const create = async params => {
  console.log('----------------- params')
  console.log(params)
  const columns = Object.keys(params)
  console.log('----------------- columns')
  console.log(columns)

  if (!areValidColumns(columns)) {
    return { success: false, message: 'One of the columns is not valid.' }
  }

  const columnsArray = toSqlArray(columns)
  const placeHolder = toSqlPlaceholder(columns)

  const queryTemplate = `INSERT INTO expenses ${columnsArray} VALUES${placeHolder}`

  const values = Object.values(params)

  try {
    const res = await pool.query(queryTemplate, values)
    return res
  } catch (err) {
    return err
  }
}