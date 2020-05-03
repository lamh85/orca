import * as ipsumLorem from './ipsumLorem.js'

export const generateDummy = (params = {}) => {
  const base = {
    name: ipsumLorem.randomWords(),
    description: ipsumLorem.randomWords()
  }

  return { ...base, ...params }
}