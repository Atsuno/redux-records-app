import TYPE from './types'

export const showRecod = (arithmetic, comparative, sumNumber) => ({
  type: TYPE.SHOWALL.RECORD,
  payload: { arithmetic, comparative, sumNumber }
})
