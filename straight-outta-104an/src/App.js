import React, { Component } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Main from './components/pages/main/Main.js'
import blue from 'material-ui/colors/blue'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'
import Button from 'material-ui/Button'

const theme = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      500: '#4A90E2'
    },
    secondary: {
      ...green,
      A400: '#00e677'
    },
    error: red
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Main />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
