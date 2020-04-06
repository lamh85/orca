import { pool } from './databasePool.js'

const parseError = errorResponse => {

}

export const runPgQuery = async ({ queryTemplate, values }) => {
  const response = await pool.query(queryTemplate, values)

  if (response.rows) {
    return response.rows[0]
  } else {
    return parseError(response)
  }
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