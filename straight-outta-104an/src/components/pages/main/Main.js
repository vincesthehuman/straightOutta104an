import React, { Component } from 'react'
import Header from '../../layout/header/Header.js'
import MainDrawer from '../../layout/drawer/MainDrawer'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header/>
        <MainDrawer />
      </div>
    )
  }
}

export default Main
