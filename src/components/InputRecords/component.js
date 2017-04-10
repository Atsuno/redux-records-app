import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class InputRecords extends Component {
  state = {
    date: '',
    title: '',
    amount: ''
  }

  changeDate = event => {
    this.setState({
      date: event.target.value
    })
  }
  changeTilte = event => {
    this.setState({
      title: event.target.value
    })
  }

  changeAmount = event => {
    this.setState({
      amount: event.target.value
    })
  }

  eventClick = () => {
    const date = this.state.date
    const title = this.state.title
    const amount = this.state.amount
    if (date.length && title.length && amount.length) {
      this.props.addRecord(date, title, amount)
      this.setState({
        date: '',
        title: '',
        amount: ''
      })
    }
  }

  render() {
    return (
      <div className="div-input">
        <input className="float-left" type="text" placeholder="Date" value={this.state.date} onChange={this.changeDate} />
        <input className="float-left" type="text" placeholder="Title" value={this.state.title} onChange={this.changeTilte} />
        <input className="float-left" type="text" placeholder="Amount" value={this.state.amount} onChange={this.changeAmount} />
        <button className="btn-input" onClick={this.eventClick}>Create records</button>
      </div>
    )
  }
}

InputRecords.propTypes = {
  addRecord: PropTypes.func.isRequired
}

export default InputRecords