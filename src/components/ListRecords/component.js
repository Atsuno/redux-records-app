import React from 'react'
import ItemRecords from '../ItemRecords'

const ListRecords = () => (
  <div className="div-list">
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
        <ItemRecords />
      </tbody>
    </table>
  </div>
)

export default ListRecords