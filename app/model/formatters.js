const toColumnsString = array => {
  return JSON.stringify(array)
    .replace("[", "(")
    .replace("]", ")")
    .replace(/\"/g, "")
}

const toPlaceholder = array => {
  const itemsMapped = array.map((item, index) => '$' + (index + 1))
  return '( ' + itemsMapped.join(',') + ' )'
}

export const toQueryArrays = params => {
  const paramKeys = Object.keys(params)
  const paramValues = Object.values(params)

  const columnsString = toColumnsString(paramKeys)
  const placeholder = toPlaceholder(paramValues)

  return {
    columns: paramKeys,
    values: paramValues,
    columnsString,
    placeholder
  }
}