import { connect } from 'react-redux'
import { addRecord } from '../../actions/records'
import InputRecords from './component'

const mapDispatchToProps = { addRecord }

export default connect(null, mapDispatchToProps)(InputRecords)