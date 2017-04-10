import React from 'react'
import logo from './assets/logo.svg'
import './assets/style.css'
import InputRecords from '../InputRecords'
import ShowRecords from '../ShowRecords'
import ListRecords from '../ListRecords'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      <h2 className="h2-records">Record</h2>
      <ShowRecords /> <InputRecords /> <ListRecords />
    </div>
  </div>
)

export default App
