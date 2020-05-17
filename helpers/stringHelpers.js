const randomCharacter = () => {
  const randomNumber = Math.random() * 36
  const rounded = Math.round(randomNumber)
  return rounded.toString(36)
}

export const randomString = length => {
  let counter = 1
  let string = ''

  while (counter <= Number(length)) {
    string += randomCharacter()
    counter ++
  }

  return string
}
