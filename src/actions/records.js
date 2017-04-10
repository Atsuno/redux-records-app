import TYPE from './types'

export const deleteRecord = id => ({
  type: TYPE.RECORD.DELETE,
  payload: { id }
})
