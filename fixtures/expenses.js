import * as ipsumLorem from './ipsumLorem.js'

export const generateDummy = (params = {}) => {
  const base = {
    name: ipsumLorem.randomWords().join(' '),
    description: ipsumLorem.randomWords().join(' ')
  }

  return { ...base, ...params }
}