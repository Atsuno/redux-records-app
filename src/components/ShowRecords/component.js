import React from 'react'
import './assets/style.css'

const ShowRecords = ({ records }) => {
  const arithnetic = records.reduce((callback, record) => callback = +record.amount.indexOf(), 0)

  const sum = records.reduce((callback, record) => callback += +record.amount, 0)
  const comparative = records.reduce((callback, record) => callback = record.id > 1 ? record.amount : 0, 0)

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
            <td>
              {
              arithnetic
            }
            </td>
            <td>
              {
              comparative
            }
            </td>
            <td>
              {
              sum
            }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShowRecords