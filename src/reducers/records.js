import { initialStore } from '../store'
import TYPE from '../actions/types'

const createNewRecord = (records, date, title, amount) => ({
  id: records.length ? records[records.length - 1].id + 1 : 1,
  date,
  title,
  amount
})

export default (records = initialStore.records, action) => {
  switch (action.type) {
    case TYPE.RECORD.ADD: {
      return [...records, createNewRecord(records, action.payload.date, action.payload.title, action.payload.amount)]
    }
    case TYPE.RECORD.DELETE: {
      return records.filter(record => record.id !== action.payload.id)
    }
    default: {
      return records
    }
  }
}