import TYPE from './types'

export const addRecord = (date, title, amount) => ({
  type: TYPE.RECORD.ADD,
  payload: { date, title, amount }
})

export const deleteRecord = id => ({
  type: TYPE.RECORD.DELETE,
  payload: { id }
})
