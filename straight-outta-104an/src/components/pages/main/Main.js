import React, { Component } from 'react'
import Header from '../../layout/header/Header'
import NewsCard from '../../layout/newscard/NewsCard'
import Paper from 'material-ui/Paper'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <div
          style={{

            paddingTop: '10px'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap'
            }}
          >
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    )
  }
}

export default Main
