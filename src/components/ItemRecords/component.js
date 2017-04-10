import React from 'react'
import './assets/style.css'

const ItemRecords = ({ id, date, title, amount }) => (
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

export default ItemRecords