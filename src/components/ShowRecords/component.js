import React, { PropTypes } from 'react'
import './assets/style.css'

const ShowRecords = ({ records }) => {
  const arithnetic = records.reduce((callback, record) => callback += record.id < 2 ? +record.amount : record.amount, 0)

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
ShowRecords.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
      title: PropTypes.string,
      amount: PropTypes.string
    })
  ).isRequired
}
ShowRecords.defaultProps = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      id: 1,
      date: 'text 1',
      title: 'text 1',
      amount: '100'
    })
  ).isRequired
}

export default ShowRecords