import React, { Component } from 'react'
import Header from '../../layout/header/Header'
import NewsCard from '../../layout/newscard/NewsCard'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <NewsCard />
      </div>
    )
  }
}

export default Main
