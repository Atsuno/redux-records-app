import TYPE from './types'

export const addRecord = title => ({
  type: TYPE.RECORD.ADD,
  payload: { title }
})

export const deleteRecord = id => ({
  type: TYPE.RECORD.DELETE,
  payload: { id }
})
