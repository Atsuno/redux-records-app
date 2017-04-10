import { connect } from 'react-redux'
import { deleteRecord } from '../../actions/records'
import ItemRecords from './component'

const mapDispatchToProps = { deleteRecord }

export default connect(null, mapDispatchToProps)(ItemRecords)