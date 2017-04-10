import React from 'react'
import './assets/style.css'

const ShowRecords = () => (
  <div>
    <table>
      <tbody>
        <tr>
          <th className="th-credit">Credit</th>
          <th className="th-debit">Debit</th>
          <th className="th-balance">Balance</th>
        </tr>
        <tr>
          <td>{100}</td>
          <td>{-50}</td>
          <td>{50}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default ShowRecords