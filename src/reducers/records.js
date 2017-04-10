import { initialStore } from '../store'
import TYPE from '../actions/types'

const createNewRecord = (records, title) => ({
  id: records.length ? records[records.length - 1].id + 1 : 1,
  date: records.title,
  title,
  amount: records.amount
})

export default (records = initialStore.records, action) => {
  switch (action.type) {
    case TYPE.RECORD.ADD: {
      return [...records, createNewRecord(records, action.payload.title)]
    }
    case TYPE.RECORD.DELETE: {
      return records.filter(record => record.id !== action.payload.id)
    }
    default: {
      return records
    }
  }
}