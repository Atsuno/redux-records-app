import React, { PropTypes } from 'react'
import './assets/style.css'

const ItemRecords = ({id, date, title, amount, deleteRecord }) => (
  <tr>
    <td className="td-item">
      {date}
    </td>
    <td className="td-item">
      {title}
    </td>
    <td className="td-item">
      {`฿ ${amount}`}
    </td>
    <td>
      <button className="button-item" onClick={() => deleteRecord(id)}>Delete</button>
    </td>
  </tr>
)
ItemRecords.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number,
  deleteRecord: PropTypes.func.isRequired
}
ItemRecords.defaultProps = {
  id: 1,
  date: '2017-05-06',
  title: 'text',
  amount: 100
}

export default ItemRecords