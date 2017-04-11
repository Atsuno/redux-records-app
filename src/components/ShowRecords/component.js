import React from 'react'
import './assets/style.css'

const ShowRecords = () => {
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <th className="th-credit">Credit</th>
          <th className="th-debit">Debit</th>
          <th className="th-balance">Balance</th>
        </tr>
        <tr>
          <td>{1}</td>
          <td>{1}</td>
          <td>{2}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShowRecords