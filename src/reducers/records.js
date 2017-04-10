import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (records = initialStore.records, action) => {
  switch (action.type) {
    case TYPE.RECORD.DELETE: {
      return records.filter(record => record.id !== action.payload.id)
    }
    default: {
      return records
    }
  }
}