import React from 'react'
import './assets/style.css'

const ShowRecords = ({ records }) => (
  <div>
    <table>
      <tbody>
        <tr>
          <th className="th-credit">Credit</th>
          <th className="th-debit">Debit</th>
          <th className="th-balance">Balance</th>
        </tr>
        <tr>
          <td>
            {
              records.map(record => record.id < 2 && record.amount )
            }
          </td>
          <td>
            {
              records.map(record => record.id > 1 && record.amount)
            }
          </td>
          <td>
            {
            records.reduce((callback, record) => callback += +record.amount, 0)
          }
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default ShowRecords