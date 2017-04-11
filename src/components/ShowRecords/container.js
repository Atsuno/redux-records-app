import { connect } from 'react-redux'
import ShowRecords from './component'

const mapStateTodProps = state => ({
  records: state.records
})

export default connect(mapStateTodProps)(ShowRecords)