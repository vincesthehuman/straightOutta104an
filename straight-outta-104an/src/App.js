import React, { Component } from 'react'
import './App.css'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Main from './components/pages/main/Main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    )
  }
}

export default App
