import { pool } from './common/databasePool.js'
import { toSqlArray } from './common/formatters.js'

const WHITELISTED_COLUMNS = [
  'name', 'description', 'amount', 'period_length', 'period_units'
]

const areValidColumns = request => {
  return request.every(item => WHITELISTED_COLUMNS.includes(item))
}

// eg: INSERT INTO expenses (name, description, amount, period_length, period_units) VALUES ('test name', 'test description', 99, 5, 'months');
export const create = async params => {
  const columns = Object.keys(params)

  if (!areValidColumns(columns)) {
    return { success: false, message: 'One of the columns is not valid.' }
  }

  const columnsArray = toSqlArray(columns)

  const queryTemplate = `INSERT INTO expenses ${columnsArray} VALUES`

  const values = Object.values(params)

  try {
    const res = await pool.query(queryTemplate, values)
    console.log(res.rows[0])
  } catch (err) {
    console.log(err.stack)
  }
}