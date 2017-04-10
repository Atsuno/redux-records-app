import { connect } from 'react-redux'
import ListRecords from './component'

const mapStateTodProps = state => ({
  records: state.records
})

export default connect(mapStateTodProps)(ListRecords)