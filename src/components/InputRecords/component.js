import React from 'react'
import './assets/style.css'

const InputRecords = () => (
  <div className="div-input">
    <input className="float-left" type="text" placeholder="Date" />
    <input className="float-left" type="text" placeholder="Title" />
    <input className="float-left" type="text" placeholder="Amount" />
    <button className="btn-input">Create records</button>
  </div>
)

export default InputRecords