import React, { PropTypes } from 'react'
import './assets/style.css'

const ItemRecords = ({ date, title, amount }) => (
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
      <button className="button-item">Delete</button>
    </td>
  </tr>
)
ItemRecords.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number
}
ItemRecords.defaultProps = {
  date: '2017-05-06',
  title: 'text',
  amount: 100
}

export default ItemRecords