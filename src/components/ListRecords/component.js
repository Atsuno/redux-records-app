import React, { PropTypes } from 'react'
import ItemRecords from '../ItemRecords'
import './assets/style.css'

const ListRecords = ({ records }) => (
  <div className="div-list">
    <table>
      <tbody>
        <tr>
          <th className="th-list">Date</th>
          <th className="th-list">Title</th>
          <th className="th-list">Amount</th>
          <th className="th-list">Action</th>
        </tr>
        {
          records.map(record => <ItemRecords key={record.id} {...record} />)
        }
      </tbody>
    </table>
  </div>
  )
ListRecords.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
      title: PropTypes.string,
      amount: PropTypes.string
    })
  ).isRequired
}
ListRecords.defaultProps = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      id: 1,
      date: 'text 1',
      title: 'text 1',
      amount: '100'
    })
  ).isRequired
}

export default ListRecords