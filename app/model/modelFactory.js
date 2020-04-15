import {
  toInsertQuery,
  toUpdateQuery,
  toSelectQuery
} from './queryBuilders.js'
import { runPgQuery } from './pgInterface.js'

const generateCreateFunction = ({
  tableName,
  whiteListedColumns
}) => params => {
  const { queryTemplate, values } = toInsertQuery({
    rowObj: params,
    tableName,
    validColumns: whiteListedColumns
  })

  return runPgQuery({ queryTemplate, values })
}

const generateUpdateFunction = ({
  tableName,
  whiteListedColumns
}) => ({
  id,
  params
}) => {
  const { queryTemplate, values } = toUpdateQuery({
    id,
    params,
    tableName,
    whiteListedColumns
  })

  return runPgQuery({ queryTemplate, values })
}

const generateWhereFunction = tableName => modifiers => {
  const { queryTemplate, values } = toSelectQuery({
    modifiers,
    tableName
  })

  return runPgQuery({ queryTemplate, values })
}

const generateModel = ({ tableName, whiteListedColumns }) => {
  return {
    create: generateCreateFunction({ tableName, whiteListedColumns }),
    update: generateUpdateFunction({ tableName, whiteListedColumns }),
    where: generateWhereFunction(tableName)
  }
}

export { generateModel }