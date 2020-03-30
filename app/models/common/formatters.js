export const toSqlArray = array => {
  return JSON.stringify(array)
    .replace("[", "(")
    .replace("]", ")")
    .replace(/\"/g, "")
}

export const toSqlPlaceholder = array => {
  const itemsMapped = array.map((item, index) => '$' + (index + 1))
  return toSqlArray(itemsMapped)
}