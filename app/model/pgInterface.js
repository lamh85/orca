import { pool } from './databasePool.js'

const parseError = errorResponse => {

}

export const runPgQuery = async ({ queryTemplate, values }) => {
  const response = await pool.query(queryTemplate, values)
  const { rows } = response

  if (!rows) return parseError(response)

  if (rows.length == 0) return rows[0]

  return rows
}

// Example error object:
/*
{
    "name": "error",
    "length": 207,
    "severity": "ERROR",
    "code": "23505",
    "detail": "Key (name)=(someName2) already exists.",
    "schema": "public",
    "table": "expenses",
    "constraint": "expenses_name_key",
    "file": "nbtinsert.c",
    "line": "570",
    "routine": "_bt_check_unique"
}
*/