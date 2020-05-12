const toDecimal = (toConvert, decimalPlaces) => {
  const factor = Math.pow(10, decimalPlaces)
  return Math.round(toConvert * factor) / factor
}

export const randomAmount = () => {
  const unrounded = Math.random() * 100
  return toDecimal(unrounded, 2)
}