import { toInsertQuery } from './queryBuilders.js'
import { runPgQuery } from './pgInterface.js'

// class Model {
//   constructor({ tableName, whiteListedColumns }) {
//     this.tableName = tableName
//     this.whiteListedColumns = whiteListedColumns
//   }

//   create(params) {
//   }

//   get(params) {
//     if (typeof params == 'object') {
//       column = Object.keys(params)[0]
//       value = Object.values(params)[0]
//     }
//   }

//   index(params) {
//   }

//   update() {

//   }

//   destroy() {

//   }
// }

const generateCreateFunction = ({
  tableName,
  whiteListedColumns
}) => params => {
  const { queryTemplate, values } = toInsertQuery({
    rowObj: params,
    tableName: this.tableName,
    validColumns: this.whiteListedColumns
  })

  return runPgQuery({ queryTemplate, values })
}

const generateModel = ({ tableName, whiteListedColumns }) => {
  return {
    create: generateCreateFunction({ tableName, whiteListedColumns })
  }
}

export { generateModel }