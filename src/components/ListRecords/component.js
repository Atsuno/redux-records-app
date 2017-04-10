import React from 'react'
import ItemRecords from '../ItemRecords'

const ListRecords = ({ records }) => (
  <div className="div-list">
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
        {
        records.map(record => <ItemRecords key={record.id} {...record} />)
      }
      </tbody>
    </table>
  </div>
)

export default ListRecords