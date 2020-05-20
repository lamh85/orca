const randomCharacter = () => {
  const randomNumber = Math.random() * 36
  const rounded = Math.round(randomNumber)
  return rounded.toString(36)
}

export const randomString = length => {
  let position = 1
  let string = ''

  while (position <= Number(length)) {
    string += randomCharacter()
    position ++
  }

  return string
}
