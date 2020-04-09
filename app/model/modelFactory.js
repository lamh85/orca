import { toInsertQuery, toUpdateQuery } from './queryBuilders.js'
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

const generateUpdateFunction = ({ tableName }) => ({
  id,
  params
}) => {
  const { queryTemplate, values } = toUpdateQuery({
    id,
    params,
    tableName
  })

  return runPgQuery({ queryTemplate, values })
}

const generateModel = ({ tableName, whiteListedColumns }) => {
  return {
    create: generateCreateFunction({ tableName, whiteListedColumns }),
    updat: generateUpdateFunction({ tableName })
  }
}

export { generateModel }